import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Download,
  Star,
  Calendar,
  Users,
  FileText,
  ArrowUp,
} from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {toast} from "sonner";
import axios from "axios";
import { MdInventory } from "react-icons/md";

export interface JobPreferences {
  targetSpecialty: string;
  targetRoleLevel: string;
  preferredLocations: string[];
  preferredStartDate: string;
  workPatternPreference: string;
}

export interface PersonalInfo {
  fullName: string;
  nationality?: string;
  currentLocation?: string;
  gmcNumber?: string;
  medicalDegree?: string;
  graduationYear?: string;
}

export interface VisaInfo {
  currentVisaStatus: string;
  visaExpiryDate?: string;
  hasDependents?: boolean;
  previousUKSponsorship?: string;
}

export interface Trust {
  id: string;
  trustName?: string;
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
  benefits?: string[];
  contactEmail?: string;
  website?: string;
  personalInfo?: PersonalInfo;
  visaInfo?: VisaInfo;
  shortlist?: string[];
  jobPreferences?: JobPreferences;

  // Allow any array of strings
  recommendations?: string[];
}


export interface RedFlag {
  trust: string;
  reason: string;
  advice: string;
}

interface TrustMatchResultsProps {
  results: {
    totalMatches?: number;
    shortlist?: Trust[];
    redFlags?: (string | RedFlag)[];
    recommendations?: string[];
  };
  userProfile?: any;
  userId?: string;
  onBack: () => void;
  handleUpdateProfile: () => void;
}

const TrustMatchResults = ({
  results,
  onBack,
  userId,
  handleUpdateProfile,
}: TrustMatchResultsProps) => {
  const { totalMatches = 0, shortlist = [], redFlags = [], recommendations = [] } = results;

  const [selectedTrust, setSelectedTrust] = useState<Trust | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFitScoreColor = (score: number = 0) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const formatDate = (date?: string | null) => (date ? new Date(date).toLocaleDateString() : "—");

  const openModal = (trust: Trust) => {
    setSelectedTrust(trust);
    setIsModalOpen(true);
  };

  const handleDownloadReport = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      const currentUserId = userId || parsedUser?._id;
      if (!currentUserId) return toast.error("User not logged in.");

      const token = localStorage.getItem("token");
      if (!token) return toast.error("Missing auth token.");

      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/tools/sponsor/${currentUserId}/download`,
        { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `sponsorship-report-${currentUserId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Sponsorship report downloaded successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to download sponsorship report.");
    }
  };

  const transformedRedFlags: RedFlag[] = redFlags.map((flag) =>
    typeof flag === "string" ? { trust: "Unknown", reason: flag, advice: "" } : { trust: flag.trust || "Unknown", reason: flag.reason || "", advice: flag.advice || "" }
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Your Sponsorship Matches</h2>
          <p className="text-muted-foreground">
            Found {totalMatches} potential matches • Showing top {shortlist.length}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <Button onClick={handleDownloadReport}>
            <Download className="h-4 w-4 mr-2" /> Download Report
          </Button>
        </div>
      </div>

      {/* Trust Matches */}
      <div className="grid gap-6">
        {shortlist.map((trust) => (
          <Card key={trust.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-xl">{trust.personalInfo?.fullName || trust.trustName || "—"}</CardTitle>
                    <Badge className={`font-bold ${getFitScoreColor(trust.fitScore ?? 0)}`}>
                      {trust.fitScore ?? "—"}% Match
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {trust.personalInfo?.currentLocation || trust.location || "—"}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" /> {trust.jobPreferences?.targetSpecialty || trust.specialty || "—"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {trust.jobPreferences?.targetRoleLevel || trust.role || "—"}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={trust.cosStatus === "Active" ? "default" : "destructive"} className="bg-primary">
                    COS {trust.cosStatus || "—"}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    Expires: {formatDate(trust.cosExpiry)}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Available Positions</h4>
                  <p className="text-2xl font-bold text-blue-600">{trust.jobsAvailable ?? 0}</p>
                  <p className="text-xs text-muted-foreground">open roles</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Sponsorship History</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{trust.sponsorshipHistory || "—"}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Application Deadline</h4>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">{formatDate(trust.applicationDeadline)}</span>
                  </div>
                </div>
              </div>

              {/* Requirements & Benefits */}
              <div className="flex gap-8">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" /> Requirements
                  </h4>
                  <ul className="space-y-1">
                    {trust.requirements?.map((req, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" /> {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" /> Benefits
                  </h4>
                  <ul className="space-y-1">
                    {trust.benefits?.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-wrap mt-4">
                <Button className="flex items-center gap-2" onClick={() => openModal(trust)}>
                  View Jobs <ArrowUp className="h-4 w-4" />
                </Button>
                
                  <a href={`mailto:${trust.contactEmail}`}>
                    <Button variant="outline">📧 Contact HR</Button>
                  </a>
              
                
                  <a href={trust.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">🌐 Trust Website</Button>
                  </a>
                
                <Button variant="outline">📋 Save for Later</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Red Flags */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="h-5 w-5" /> Sponsorship Limitations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transformedRedFlags.map((flag, idx) => (
              <div key={idx} className="p-3 bg-white rounded border border-orange-200">
                <h4 className="font-medium text-orange-900">{flag.trust}</h4>
                <p className="text-sm text-orange-700 mt-1">{flag.reason}</p>
                {flag.advice && <p className="text-xs text-orange-600 mt-2">💡 {flag.advice}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Strengthen Your Applications</CardTitle>
          <CardDescription className="text-blue-700">
            Recommended actions to improve your sponsorship chances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-blue-900">{rec}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer Actions */}
      <div className="flex justify-center gap-4 pt-6">
        <Button variant="outline" onClick={handleUpdateProfile}>
          Update Profile
        </Button>
        <Button onClick={handleDownloadReport} className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Download Full Report
        </Button>
        <Button className="flex items-center gap-2">
          <MdInventory className="h-4 w-4" /> Share with Mentors
        </Button>
      </div>

      {/* Job Preferences Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Job Preferences</DialogTitle>
          </DialogHeader>

          {selectedTrust?.jobPreferences ? (
            <div className="space-y-4 mt-2 text-sm text-gray-700">
              <div>
                <span className="font-medium">Specialty:</span> {selectedTrust.jobPreferences.targetSpecialty}
              </div>
              <div>
                <span className="font-medium">Role Level:</span> {selectedTrust.jobPreferences.targetRoleLevel}
              </div>
              <div>
                <span className="font-medium">Preferred Locations:</span>{" "}
                {selectedTrust.jobPreferences.preferredLocations?.join(", ") || "—"}
              </div>
              <div>
                <span className="font-medium">Preferred Start Date:</span>{" "}
                {selectedTrust.jobPreferences.preferredStartDate
                  ? new Date(selectedTrust.jobPreferences.preferredStartDate).toLocaleDateString()
                  : "—"}
              </div>
              <div>
                <span className="font-medium">Work Pattern:</span> {selectedTrust.jobPreferences.workPatternPreference}
              </div>
            </div>
          ) : (
            <p>No job preferences available</p>
          )}

          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrustMatchResults;
