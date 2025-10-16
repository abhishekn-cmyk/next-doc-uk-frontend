import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

import SponsorshipIntake from "@/components/Sponsor/SponsorshipIntake";
import type {
  Trust,
  PersonalInfo,
  VisaInfo,
  JobPreferences,
} from "@/components/Sponsor/TrustMatchResults";
import TrustMatchResults from "@/components/Sponsor/TrustMatchResults";
const SponsorMatch = () => {
  const [currentStep, setCurrentStep] = useState<"intake" | "results">(
    "intake"
  );
  const [userProfile, setUserProfile] = useState<any>(null);
  const [latestSponsorship, setLatestSponsorship] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Map backend sponsorship → Trust card format
  const mapSponsorshipToCard = (sponsorship: any): Trust[] => {
    if (!sponsorship) return [];

    const jobPrefs: JobPreferences = {
      targetSpecialty: sponsorship.jobPreferences?.targetSpecialty || "—",
      targetRoleLevel: sponsorship.jobPreferences?.targetRoleLevel || "—",
      preferredLocations: sponsorship.jobPreferences?.preferredLocations || [],
      preferredStartDate: sponsorship.jobPreferences?.preferredStartDate || "",
      workPatternPreference:
        sponsorship.jobPreferences?.workPatternPreference || "—",
    };

    const personal: PersonalInfo = {
      fullName: sponsorship.personalInfo?.fullName || "—",
      nationality: sponsorship.personalInfo?.nationality || "—",
      currentLocation: sponsorship.personalInfo?.currentLocation || "—",
      gmcNumber: sponsorship.personalInfo?.gmcNumber || "—",
      medicalDegree: sponsorship.personalInfo?.medicalDegree || "—",
      graduationYear: sponsorship.personalInfo?.graduationYear || "—",
    };

    const visa: VisaInfo = {
      currentVisaStatus: sponsorship.visaInfo?.currentVisaStatus || "Unknown",
      visaExpiryDate: sponsorship.visaInfo?.visaExpiryDate || undefined,
      hasDependents: sponsorship.visaInfo?.hasDependents ?? false,
      previousUKSponsorship: sponsorship.visaInfo?.previousUKSponsorship || "—",
    };

    // Default recommendations
    const recomm: string[] = [
      "Complete CPD Mastery™ to strengthen your application",
      "Consider InterviewSim™ for Trust-specific interview practice",
      "Update your CV with CV Booster™ before applying",
      "Book Mentor Session",
    ];

    // Helper to find unfilled (default) vs effectively filled
    const getRequirementsAndBenefits = (
      obj: Record<string, any>,
      prefix = ""
    ) => {
      const requirements: string[] = [];
      const benefits: string[] = [];

      for (const key in obj) {
        const value = obj[key];
        const fieldName = prefix ? `${prefix} - ${key}` : key;

        const isDefault =
          value === null ||
          value === undefined ||
          value === "" ||
          value === "—" ||
          value === "Unknown" ||
          (Array.isArray(value) && value.length === 0);

        if (isDefault) {
          requirements.push(fieldName);
        } else {
          benefits.push(`${fieldName} provided`);
        }
      }

      return { requirements, benefits };
    };

    const personalRB = getRequirementsAndBenefits(personal, "Personal Info");
    const jobPrefsRB = getRequirementsAndBenefits(jobPrefs, "Job Preferences");
    const visaRB = getRequirementsAndBenefits(visa, "Visa Info");

    const requirements = [
      ...personalRB.requirements,
      ...jobPrefsRB.requirements,
      ...visaRB.requirements,
    ];
    const benefits = [
      ...personalRB.benefits,
      ...jobPrefsRB.benefits,
      ...visaRB.benefits,
    ];

    const sponsorshipHistory = sponsorship.history?.length
      ? sponsorship.history.join(", ")
      : "—";

    return [
      {
        id: sponsorship._id,
        trustName: personal.fullName,
        location: personal.currentLocation,
        specialty: jobPrefs.targetSpecialty,
        role: jobPrefs.targetRoleLevel,
        fitScore: calculateFitScore(sponsorship),
        recommendations: recomm, // ✅ use default recommendations array
        cosStatus: visa.currentVisaStatus,
        cosExpiry: visa.visaExpiryDate
          ? new Date(visa.visaExpiryDate).toISOString()
          : null,
        jobsAvailable: 0,
        sponsorshipHistory,
        applicationDeadline: sponsorship.applicationDeadline || null,
        requirements,
        benefits,
        contactEmail: sponsorship.contactEmail || "",
        website: sponsorship.website || "",
        personalInfo: personal,
        visaInfo: visa,
        jobPreferences: jobPrefs,
      },
    ];
  };

  // Fit score calculation
  const calculateFitScore = (sponsorship: any): number => {
    let score = 50; // base score
    const jobPrefs = sponsorship.jobPreferences || {};
    const visa = sponsorship.visaInfo || {};

    if (jobPrefs.targetRoleLevel === "consultant") score += 20;
    if (visa.currentVisaStatus === "tier2") score += 10;
    if (jobPrefs.targetSpecialty) score += 5;

    return Math.min(score, 100);
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

  // Fetch latest profile from backend
  const fetchLatestProfile = async () => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/tools/sponsorship/${userId}/sponsors`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const latestProfile = response.data.sponsorship;
      setUserProfile(latestProfile);
      setLatestSponsorship(latestProfile);
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.error || "Failed to fetch latest profile");
    } finally {
      setLoading(false);
    }
  };

  // Intake form completed
  const handleIntakeComplete = (profile: any) => {
    setUserProfile(profile);
    setLatestSponsorship(profile);
    setCurrentStep("results");
  };

  // Update profile clicked
  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    await fetchLatestProfile();
    setCurrentStep("intake");
  };

  const handleBack = () => {
    if (isUpdating) fetchLatestProfile();
    setCurrentStep("intake");
  };

  return (
    <div className="min-h-screen bg-background max-w-7xl px-5 sm:px-8 md:px-10 py-5">
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
              existingProfile={userProfile}
            />
          )}

          {/* Results */}
          {currentStep === "results" &&
            latestSponsorship &&
            !loading &&
            !error && (
              <TrustMatchResults
                results={{
                  totalMatches: latestSponsorship ? 1 : 0,
                  shortlist: latestSponsorship
                    ? mapSponsorshipToCard(latestSponsorship)
                    : [],
                  redFlags: [],
                  recommendations: [],
                }}
                userProfile={userProfile}
                userId={userId ?? undefined}
                onBack={handleBack}
                handleUpdateProfile={handleUpdateProfile}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default SponsorMatch;
