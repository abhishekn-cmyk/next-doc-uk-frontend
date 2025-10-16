import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

import SponsorshipIntake from "@/components/Sponsor/SponsorshipIntake";
import TrustMatchResults from "@/components/Sponsor/TrustMatchResults";
import { useMatches } from "@/hooks/useTools";

interface Trust {
  id: string;
  trustName: string;
  location?: string;
  specialty?: string;
  role?: string;
  fitScore?: number;
  cosStatus?: string;
  cosExpiry?: string | null;
  jobsAvailable?: number;
  sponsorshipHistory?: string;
  applicationDeadline?: string | null;
  requirements?: string[];
  recommendations?: string[];
  benefits?: string[];
  contactEmail?: string;
  website?: string;
}

const SponsorMatch = () => {
  const [currentStep, setCurrentStep] = useState<"intake" | "results">(
    "intake"
  );
  const [userProfile, setUserProfile] = useState<any>(null);
  const [latestSponsorship, setLatestSponsorship] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isExistingProfile, setIsExistingProfile] = useState(false); // Tracks if user has existing profile

  // Map backend sponsorship → Trust card format
  const mapSponsorshipToCard = (sponsorship: any): Trust[] => {
    if (!sponsorship) return [];
    return [
      {
        id: sponsorship._id,
        trustName: sponsorship.personalInfo?.fullName || "—",
        location: sponsorship.personalInfo?.currentLocation || "—",
        specialty: sponsorship.jobPreferences?.targetSpecialty || "—",
        role: sponsorship.medicalQualifications?.currentRole || "—",
        fitScore: 0,
        cosStatus: "Unknown",
        cosExpiry: null,
        jobsAvailable: 0,
        sponsorshipHistory: "—",
        applicationDeadline: null,
        requirements: [],
        recommendations: [
          "Complete CPD Mastery™ to strengthen your application",
          "Consider InterviewSim™ for Trust-specific interview practice",
          "Update your CV with CV Booster™ before applying",
          "Book Mentor Session",
        ],
        benefits: [],
        contactEmail: "",
        website: "",
      },
    ];
  };

  // Get userId from localStorage
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user?._id) setUserId(user._id);
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
    }
  }, []);

  // Fetch latest sponsorship from backend (used only for update)
  const fetchLatestProfile = async () => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/tools/sponsorship/${userId}/latest`
      );
      const latestProfile = response.data.sponsorship;
      if (latestProfile) {
        setUserProfile(latestProfile);
        setLatestSponsorship(latestProfile);
        setIsExistingProfile(true); // user has existing profile
      } else {
        setIsExistingProfile(false); // no profile exists
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.error || "Failed to fetch latest profile");
    } finally {
      setLoading(false);
    }
  };

  // Called when intake form is completed (add or update)
  const handleIntakeComplete = async (profile: any) => {
    setUserProfile(profile);
    setLatestSponsorship(profile);
    setCurrentStep("results");
    setIsExistingProfile(true); // now the user has a profile
  };

  // Update profile button
  const handleUpdateProfile = async () => {
    await fetchLatestProfile(); // Only fetch latest record if editing
    setCurrentStep("intake");
  };

  // Initial check if user has existing profile
  useEffect(() => {
    if (userId) fetchLatestProfile();
  }, [userId]);

  const fetchMatches = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const response = useMatches();
      setLatestSponsorship(response.data.matches); // pass to TrustMatchResults
    } catch (err) {
      setError("Failed to fetch job matches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentStep === "results") fetchMatches();
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Building className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-foreground">
              SponsorMatch™
            </h1>
            <Badge variant="secondary">AI-Powered</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Find NHS Trusts offering visa sponsorship tailored to your profile
            and specialty
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {loading && (
            <p className="text-center text-blue-600 text-lg mt-8">Loading...</p>
          )}
          {error && (
            <p className="text-center text-red-600 text-lg mt-8">{error}</p>
          )}

          {/* Intake Form */}
          {currentStep === "intake" && !loading && (
            <SponsorshipIntake
              onComplete={handleIntakeComplete}
              existingProfile={isExistingProfile ? userProfile : null} // Only pre-fill if editing
            />
          )}

          {/* Results */}
          {currentStep === "results" &&
            latestSponsorship &&
            !loading &&
            !error && (
              <TrustMatchResults
                results={{
                  totalMatches: 1,
                  shortlist: mapSponsorshipToCard(latestSponsorship),
                  redFlags: [],
                  recommendations: [],
                }}
                userProfile={userProfile}
                userId={userId ?? undefined}
                onBack={() => setCurrentStep("intake")}
                handleUpdateProfile={handleUpdateProfile} // Pass update function
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default SponsorMatch;
