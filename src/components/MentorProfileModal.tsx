// MentorProfileModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Star, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";

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

interface MentorProfileModalProps {
  mentor: MentorCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MentorProfileModal = ({ mentor, isOpen, onClose }: MentorProfileModalProps) => {
  const navigate = useNavigate();
  if (!mentor) return null;

  const handleBookSession = () => {
    onClose();
    navigate("/mentors");
  };

  const mockDetails = {
    bio: "Dedicated NHS professional with extensive experience in clinical practice and medical education. Passionate about mentoring the next generation of healthcare professionals.",
    specialties: ["Clinical Excellence", "Career Development", "NHS Navigation", "Research Guidance"],
    achievements: ["Published 25+ research papers", "Royal College Fellowship", "NHS Excellence Award"],
    availability: ["Monday 9-5", "Wednesday 2-8", "Friday 10-6"],
    rating: 4.9,
    totalReviews: 156
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Mentor Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              {mentor.badgeText && (
                <Badge className={`absolute -bottom-2 -right-2 ${mentor.badgeColor} text-white border-0 text-sm px-3 py-1`}>
                  {mentor.badgeText}
                </Badge>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">{mentor.name}</h3>
              <p className="text-muted-foreground text-lg">{mentor.title}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{mentor.experience}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{mentor.mentees}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-medium">{mockDetails.rating}</span>
                  <span className="text-sm text-muted-foreground">({mockDetails.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2">About</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{mockDetails.bio}</p>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {mockDetails.specialties.map((s, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {mockDetails.achievements.map((a, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-3">Availability</h4>
              <div className="space-y-2">
                {mockDetails.availability.map((slot, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{slot}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button onClick={handleBookSession} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a Session
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
