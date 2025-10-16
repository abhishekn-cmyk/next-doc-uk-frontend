import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, MapPin, Users, Star, ArrowRight, Calendar, Search, X } from "lucide-react";
import EnhancedMentorOnboardingForm from "@/components/mentor/EnhancedMentorOnboardingForm";
import { useMentors } from "@/hooks/useMentor";
import type { IMentor } from "@/types/mentor";
import { MentorInfoModal } from "./MentorInfo";

// --- Types ---
interface FilterOption {
  label: string;
  value: string;
  icon?: string;
  secondary?: string;
}

interface FilterConfig {
  key: keyof Filters;
  label: string;
  options: FilterOption[];
}

interface Filters {
  specialty: string[];
  location: string[];
  language: string[];
  badgeLevel: string[];
  availability: string[];
}

interface ProgramFeature {
  title: string;
  description: string;
}

interface Testimonial {
  content: string;
  author: string;
  position: string;
  rating: number;
}

// --- Filter Options ---
const SPECIALTY_OPTIONS: FilterOption[] = [
  "Academic / Research",
  "Anaesthetics",
  "Cardiology",
  "Dermatology",
  "Emergency Medicine",
  "Endocrinology & Diabetes",
  "ENT (Otolaryngology)",
  "Gastroenterology",
  "General Practice (GP)",
  "General Surgery",
  "Health and Social Care",
  "Hospital Management",
  "Internal Medicine",
  "Leadership & Management",
  "Nephrology",
  "Neurology",
  "Obstetrics & Gynaecology",
  "Oncology",
  "Ophthalmology",
  "Orthopaedics",
  "Paediatrics",
  "Pathology",
  "Psychiatry",
  "Public Health",
  "Radiology",
  "Respiratory Medicine",
  "Urology",
].map((s) => ({ label: s, value: s }));

const LOCATION_OPTIONS: FilterOption[] = [
  "London",
  "Midlands",
  "North East England",
  "North West England",
  "Northern Ireland",
  "Remote / Virtual",
  "Scotland",
  "South East England",
  "South West England",
  "Wales",
].map((l) => ({ label: l, value: l }));

const LANGUAGE_OPTIONS: FilterOption[] = [
  "Arabic",
  "Bengali",
  "English",
  "Filipino",
  "French",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Malayalam",
  "Mandarin",
  "Other",
  "Punjabi",
  "Spanish",
  "Swahili",
  "Tamil",
  "Telugu",
  "Tulu",
  "Urdu",
].map((l) => ({ label: l, value: l }));

const BADGE_LEVEL_OPTIONS: FilterOption[] = [
  { icon: "🩵", label: "Associate", value: "Associate" },
  { icon: "💙", label: "Senior", value: "Senior" },
  { icon: "🟡", label: "Principal", value: "Principal" },
];

const AVAILABILITY_OPTIONS: FilterOption[] = [
  { icon: "🔵", label: "All Mentors", secondary: "Show everyone", value: "All" },
  { icon: "🟢", label: "Accepting New Mentees", secondary: "Currently available", value: "Available" },
  { icon: "🟡", label: "Currently Booked", secondary: "Temporarily full", value: "Booked" },
  { icon: "⚫", label: "On Leave", secondary: "Temporarily unavailable", value: "Unavailable" },
];

const FILTERS: FilterConfig[] = [
  { key: "specialty", label: "Specialty", options: SPECIALTY_OPTIONS },
  { key: "location", label: "Location", options: LOCATION_OPTIONS },
  { key: "language", label: "Language", options: LANGUAGE_OPTIONS },
  { key: "badgeLevel", label: "Badge Level", options: BADGE_LEVEL_OPTIONS },
  { key: "availability", label: "Availability", options: AVAILABILITY_OPTIONS },
];

// --- Filter Dropdown with Checkboxes Component ---
interface FilterDropdownWithCheckboxesProps {
  filter: FilterConfig;
  selectedValues: string[];
  onSelectionChange: (key: keyof Filters, values: string[]) => void;
  onClose: () => void;
}

const FilterDropdownWithCheckboxes: React.FC<FilterDropdownWithCheckboxesProps> = ({
  filter,
  selectedValues,
  onSelectionChange,
  onClose,
}) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter(v => v !== value);
    
    onSelectionChange(filter.key, newValues);
  };

  const handleClearAll = () => {
    onSelectionChange(filter.key, []);
  };

  const handleSelectAll = () => {
    onSelectionChange(filter.key, filter.options.map(opt => opt.value));
  };

  return (
    <div className="absolute left-0 mt-2 w-80 rounded-lg shadow-lg bg-white border border-gray-200 max-h-96 overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-semibold text-gray-900">{filter.label}</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSelectAll}
            className="text-xs h-8 px-2"
          >
            All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="text-xs h-8 px-2"
          >
            Clear
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Checkbox List */}
      <div className="max-h-64 overflow-y-auto p-2">
        {filter.options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                {option.icon && (
                  <span className="text-lg">{option.icon}</span>
                )}
                <span className="text-sm font-medium text-gray-900">
                  {option.label}
                </span>
              </div>
              {option.secondary && (
                <p className="text-xs text-gray-500 mt-1">{option.secondary}</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

// --- Program Features ---
const programFeatures: ProgramFeature[] = [
  {
    title: "Personalized Matching",
    description:
      "Matched with mentors based on specialty, background, and career goals",
  },
  {
    title: "Regular Sessions",
    description: "Monthly one-on-one sessions with flexible scheduling",
  },
  {
    title: "Career Guidance",
    description:
      "Strategic advice on specialty training applications and career progression",
  },
  {
    title: "Network Access",
    description: "Introduction to professional networks and NHS contacts",
  },
  {
    title: "Ongoing Support",
    description:
      "Support continues beyond initial placement for long-term success",
  },
  {
    title: "Peer Community",
    description: "Access to mentee community for peer support and networking",
  },
];

// --- Testimonials ---
const testimonials: Testimonial[] = [
  {
    content:
      "Dr. Johnson's mentorship was instrumental in my PLAB success. Her practical advice and emotional support made all the difference during my transition to the NHS.",
    author: "Dr. Raj Patel",
    position: "F2 Doctor, University College London Hospitals",
    rating: 5,
  },
  {
    content:
      "Professor Thompson helped me navigate the complex NHS structure and secure my ST1 position in surgery. His insights into leadership were invaluable.",
    author: "Dr. Maria Santos",
    position: "ST2 General Surgery, Chelsea and Westminster Hospital",
    rating: 5,
  },
  {
    content:
      "Dr. Sharma's guidance went beyond medical training. She helped me maintain work-life balance and build confidence in my new environment.",
    author: "Dr. James Chen",
    position: "CT1 Psychiatry, South London and Maudsley NHS Trust",
    rating: 5,
  },
];

// --- Main Component ---
export default function Mentors() {
  const [showOnboardingForm, setShowOnboardingForm] = useState(false);
  const [showMentorInfoModal, setShowMentorInfoModal] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    specialty: [],
    location: [],
    language: [],
    badgeLevel: [],
    availability: [],
  });
  const [activeFilter, setActiveFilter] = useState<keyof Filters | null>(null);
  const [searchQuery, setSearchQuery] = useState(""); // Fixed: moved inside component

  const { data: mentors = [], isLoading, error } = useMentors();
  const navigate = useNavigate();

  const handleFilterSelectionChange = (key: keyof Filters, values: string[]) => {
    setFilters(prev => ({
      ...prev,
      [key]: values
    }));
  };

  const handleClearAll = () => {
    setFilters({
      specialty: [],
      location: [],
      language: [],
      badgeLevel: [],
      availability: [],
    });
    setSearchQuery(""); // Clear search query too
    setActiveFilter(null);
  };

  const handleFilterButtonClick = (filterKey: keyof Filters) => {
    setActiveFilter(activeFilter === filterKey ? null : filterKey);
  };

  const handleCloseFilterDropdown = () => {
    setActiveFilter(null);
  };

  // Get display label for filter button
  const getFilterButtonLabel = (filterKey: keyof Filters, label: string) => {
    const selectedValues = filters[filterKey];
    if (selectedValues.length === 0) {
      return label;
    }
    if (selectedValues.length === 1) {
      const option = FILTERS.find(f => f.key === filterKey)?.options.find(opt => opt.value === selectedValues[0]);
      return option?.label || `${label} (1)`;
    }
    return `${label} (${selectedValues.length})`;
  };

  // --- Filter mentors based on selected filters and search query ---
  const filteredMentors = useMemo(() => {
    if (!mentors || !Array.isArray(mentors)) return [];
    
    return mentors.filter((mentor: IMentor) => {
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const searchableFields = [
          mentor.name,
          mentor.specialty,
          mentor.designation,
          mentor.position,
          mentor.currentRole,
          mentor.address,
          mentor.description
        ].filter(Boolean).join(' ').toLowerCase();
        
        if (!searchableFields.includes(query)) {
          return false;
        }
      }

      // Specialty filter (array includes check)
      if (filters.specialty.length > 0 && mentor.specialty && 
          !filters.specialty.some(specialty => 
            mentor.specialty?.toLowerCase().includes(specialty.toLowerCase())
          )) return false;

      // Location filter
      if (filters.location.length > 0 && mentor.address && 
          !filters.location.some(location => 
            mentor.address?.toLowerCase().includes(location.toLowerCase())
          )) return false;

      // Language filter
      if (filters.language.length > 0 && mentor.language && 
          !filters.language.includes(mentor.language)) return false;

      // Badge level filter
      if (filters.badgeLevel.length > 0 && mentor.badgeLevel && 
          !filters.badgeLevel.includes(mentor.badgeLevel)) return false;

      // Availability filter
      if (filters.availability.length > 0) {
        if (filters.availability.includes("All")) {
          // Show all mentors
        } else if (mentor.availability && !filters.availability.includes(mentor.availability)) {
          return false;
        }
      }

      return true;
    });
  }, [mentors, filters, searchQuery]); // Added searchQuery to dependencies

  const handleFindMentor = (mentorName: string) => {
    console.log(`Connecting with ${mentorName}`);
    document.getElementById('mentor-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetMatched = () => {
    navigate('/get-started');
  };

  const handleLearnMore = () => {
    setShowMentorInfoModal(true);
  };

  const handleApplyFromModal = () => {
    setShowMentorInfoModal(false);
    setShowOnboardingForm(true);
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-red-500 mb-4">Error loading mentors</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentor Insights & Guidance
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Connect with experienced NHS consultants and international medical
              graduates who have successfully navigated the UK healthcare system.
            </p>
          </div>

          {/* Top row: Search + Become Mentor */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-4">
            {/* Small Search Bar */}
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5 opacity-70" />
              <input
                type="text"
                placeholder="Search mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-all backdrop-blur-sm"
              />
            </div>

            {/* Become a Mentor Button */}
            <div className="flex-shrink-0">
            <Button
  size="default"
  variant="outline"
  className="px-4 border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white whitespace-nowrap"
  onClick={() => setShowOnboardingForm(true)}
>
  Become a Mentor
</Button>


            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-3 items-center mb-4">
            {FILTERS.map((filter) => (
              <div key={filter.key} className="relative">
                <button
                  type="button"
                  onClick={() => handleFilterButtonClick(filter.key)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors border min-w-[140px] ${
                    filters[filter.key].length > 0
                      ? 'bg-white/20 border-white/30'
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <span className="truncate">{getFilterButtonLabel(filter.key, filter.label)}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform transition-transform flex-shrink-0 ${
                      activeFilter === filter.key ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Show checkboxes only when this filter is active */}
                {activeFilter === filter.key && (
                  <FilterDropdownWithCheckboxes
                    filter={filter}
                    selectedValues={filters[filter.key]}
                    onSelectionChange={handleFilterSelectionChange}
                    onClose={handleCloseFilterDropdown}
                  />
                )}
              </div>
            ))}

            {/* Clear All Button - show only when search or filters active */}
            {(searchQuery || Object.values(filters).some(arr => arr.length > 0)) && (
              <Button
                variant="outline"
                onClick={handleClearAll}
                className="px-4 border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white whitespace-nowrap"
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Results count */}
              {filteredMentors.length > 0 && (
        <p className="text-white/70 text-sm mb-4 text-center">
          Showing {filteredMentors.length} of {mentors.length} results
        </p>
      )}

        </div>
      </section>

      {/* Rest of your component remains the same */}
      {/* Mentor Cards */}
      <section id="mentor-cards" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Mentors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from experienced professionals who have successfully
              transitioned to the NHS and are passionate about supporting the
              next generation.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p>Loading mentors...</p>
            </div>
          ) : filteredMentors.length === 0 ? (
            <div className="text-center py-12 text-black">
              <p className="text-muted-foreground mb-4">
                {mentors.length === 0 ? 'No mentors available' : 'No mentors match your filters'}
              </p>
              {mentors.length > 0 && (
                <Button onClick={handleClearAll}>
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredMentors.map((mentor: IMentor) => (
                <Card key={mentor._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={mentor.image} alt={mentor.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials(mentor.name)}
                          </AvatarFallback>
                        </Avatar>

                        {/* Name and Location */}
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl truncate">{mentor.name}</CardTitle>

                          {/* Role badge */}
                          <span className="inline-flex items-center bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full mt-1">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                            {mentor.designation || mentor.position || mentor.currentRole || "Medical Professional"}
                          </span>

                          {/* Location */}
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{mentor.address || "Location not specified"}</span>
                          </div>

                          {/* Rating & mentees */}
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{mentor.rating ? mentor.rating.toFixed(1) : "N/A"}</span>
                            </div>
                            {mentor.mentees && (
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>{mentor.mentees.length} mentees</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {mentor.background?.[0]?.description && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Background</p>
                          <p className="text-sm line-clamp-3">{mentor.background[0].description}</p>
                        </div>
                      )}

                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Specialties</p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.specialty
                            ?.split(",")
                            .map((s) => s.trim())
                            .filter(Boolean)
                            .map((s, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {s}
                              </Badge>
                            ))}
                        </div>
                      </div>

                      {mentor.description && (
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                          <p className="text-sm italic line-clamp-3">"{mentor.description}"</p>
                        </div>
                      )}

                      <Button className="w-full" onClick={() => handleFindMentor(mentor.name)}>
                        Connect with {mentor.name.split(" ")[0]}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mentorship Program Features</h2>
            <p className="text-muted-foreground">
              Comprehensive support designed to accelerate your NHS career success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Hear from international doctors who have achieved their NHS career goals through mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic flex-grow">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Share your expertise and help shape the next generation of medical professionals in the NHS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Make an Impact</h3>
              <p className="text-muted-foreground">
                Guide career decisions and professional development
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Flexible Commitment</h3>
              <p className="text-muted-foreground">
                Monthly sessions that fit your schedule
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Personal Growth</h3>
              <p className="text-muted-foreground">
                Develop leadership and teaching skills
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => setShowOnboardingForm(true)}
            >
              Apply to Mentor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8"
              onClick={handleLearnMore}
            >
              Learn More About Mentoring
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Connect Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mx-auto">
            <ArrowRight className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Ready to Connect with a Mentor?</h3>
          <p className="text-lg mb-8 opacity-90">
            Take the next step in your NHS career journey with expert guidance and support.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-10 bg-white text-primary hover:bg-gray-100"
            onClick={handleGetMatched}
          >
            Get Matched Today
          </Button>
        </div>
      </section>

      {/* Mentor Onboarding Form */}
      {showOnboardingForm && (
        <EnhancedMentorOnboardingForm
          isOpen={showOnboardingForm}
          onClose={() => setShowOnboardingForm(false)}
        />
      )}
      {showMentorInfoModal && (
        <MentorInfoModal 
          isOpen={showMentorInfoModal}
          onClose={() => setShowMentorInfoModal(false)}
          onApply={handleApplyFromModal}
        />
      )}
    </div>
  );
}