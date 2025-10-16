// RotatingMentorDisplay.tsx
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { MentorProfileModal } from "./MentorProfileModal";
import { useMentors } from "@/hooks/useMentor"; // your hook
import { User } from "lucide-react";
// Frontend-friendly type
interface MentorCard {
  id: string;
  name: string;
  title: string;
  experience: string;
  mentees: string;
  image: string;
  badgeText: string;
  badgeColor: string;
}

export const RotatingMentorDisplay = () => {
  const { data: mentors = [], isLoading } = useMentors();
  const [selectedMentor, setSelectedMentor] = useState<MentorCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const navigate = useNavigate();

  const handleMentorClick = (mentor: MentorCard) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  // Filter mentors with NHS experience > 2 years and map to frontend type
  const experiencedMentors: MentorCard[] = mentors.map((m) => ({
    id: m._id || "", // fallback if _id missing
    name: m.fullName || "",
    title: m.specialty || "",
    experience: `${m.nhsExperienceYears || 0}+ years NHS`,
    mentees: m.mentees ? `${m.mentees.length}+ mentees` : "0 mentees",
    image: m.profilePicture || m.image || "/default-profile.png",
    badgeText: "Principal", // default, can assign dynamically
    badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-600",
  }));

  // Split into groups of 3 for rotation
  const mentorGroups: MentorCard[][] = [];
  for (let i = 0; i < experiencedMentors.length; i += 3) {
    mentorGroups.push(experiencedMentors.slice(i, i + 3));
  }

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!mentorGroups.length) return;
    const interval = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % mentorGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mentorGroups.length]);

  const currentGroup = mentorGroups[currentGroupIndex] || [];

  if (isLoading) return <p>Loading mentors...</p>;
  if (!experiencedMentors.length)
    return <p>No mentors found with 2 years NHS experience.</p>;

  return (
    <div className="lg:max-w-md">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-white">
          Meet Our NHS Mentors
        </h3>
        <p className="text-primary-foreground/80 text-sm">
          Learn from experienced NHS professionals
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {currentGroup.map((mentor, index) => (
          <Card
            key={`${mentor.id}-${currentGroupIndex}`}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground animate-fade-in cursor-pointer hover:bg-white/20 transition-all duration-200 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleMentorClick(mentor)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/30 flex items-center justify-center bg-gray-600">
                    {mentor.image ? (
                      <img
                        src={`${import.meta.env.VITE_API_BASE_URL}${
                          mentor.image
                        }`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {mentor.badgeText && (
                    <Badge
                      className={`absolute -bottom-1 -right-1 ${mentor.badgeColor} text-white border-0 text-xs px-2 py-0.5`}
                    >
                      {mentor.badgeText}
                    </Badge>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{mentor.name}</h4>
                  <p className="text-xs text-primary-foreground/80">
                    {mentor.title}
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-1">
                    {mentor.experience} • {mentor.mentees}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center space-x-2 mb-8">
        {mentorGroups.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentGroupIndex
                ? "bg-primary-foreground"
                : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <Button
          onClick={() => navigate("/mentors")}
          className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
        >
          Get Mentored
        </Button>
        <Button
          onClick={() => navigate("/mentors")}
          variant="outline"
          className="w-full border-white/30 text-blue-500 hover:bg-white/10 hover:text-blue-400"
        >
          Become a Mentor
        </Button>
      </div>

      <MentorProfileModal
        mentor={selectedMentor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
