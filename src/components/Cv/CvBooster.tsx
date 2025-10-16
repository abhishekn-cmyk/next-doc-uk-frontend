import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import TemplateSelector from "@/components/TemplateSelector";
import CVFormWizard from "@/components/CVFormWizard";

// --- Types ---
type CVFormData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    gmcNumber: string;
    preferredTitle: string;
  };
  experience: {
    currentRole: string;
    currentEmployer: string;
    yearsExperience: string;
    specialty: string;
    previousRoles: string[];
  };
  education: {
    medicalSchool: string;
    graduationYear: string;
    postgraduateQualifications: string[];
    currentStudy: string;
  };
  achievements: {
    audits: string[];
    research: string[];
    teaching: string[];
    cpd: string[];
  };
  additional: { languages: string[]; interests: string; availability: string };
};

export default function CvBooster() {
  // --- User ID ---
  const user_id = JSON.parse(localStorage.getItem("user") || "{}")?._id;

  // --- State ---
  const [currentStep, setCurrentStep] = useState<
    "pathway" | "template" | "form" | "review"
  >("pathway");
  const [selectedPathway, setSelectedPathway] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [formData, setFormData] = useState<CVFormData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      gmcNumber: "",
      preferredTitle: "",
    },
    experience: {
      currentRole: "",
      currentEmployer: "",
      yearsExperience: "",
      specialty: "",
      previousRoles: [],
    },
    education: {
      medicalSchool: "",
      graduationYear: "",
      postgraduateQualifications: [],
      currentStudy: "",
    },
    achievements: { audits: [], research: [], teaching: [], cpd: [] },
    additional: { languages: [], interests: "", availability: "" },
  });
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [aiFeedback, setAiFeedback] = useState<{
    score: number;
    strengths: string[];
    improvements: string[];
  }>({ score: 0, strengths: [], improvements: [] });
  // --- Pathways ---
  const pathways = [
    {
      id: "plab-img",
      title: "PLAB/International Medical Graduate",
      desc: "For doctors completing PLAB and seeking NHS positions",
      tag: "Popular",
    },
    {
      id: "uk-grad",
      title: "UK Graduate (Core/Specialty/ARCP)",
      desc: "For UK medical graduates in training programmes",
      tag: "Most Used",
    },
    {
      id: "postgrad-exam",
      title: "Postgraduate Exam Candidate",
      desc: "For MRCP, MRCS, MRCOG, MRCPCH applications",
      tag: "Exam Focus",
    },
    {
      id: "sas-ahp",
      title: "SAS/AHP Professional",
      desc: "For SAS doctors and Allied Health Professionals",
      tag: "Specialized",
    },
    {
      id: "consultant",
      title: "Consultant/Academic/Clinical Fellow",
      desc: "For senior clinical and academic positions",
      tag: "Senior Level",
    },
    {
      id: "returner",
      title: "Return to Practice",
      desc: "For professionals returning to NHS practice",
      tag: "Support",
    },
  ];

  // --- AI Feedback (mock) ---

  // --- Handlers ---
  const handlePathwaySelect = (id: string) => {
    setSelectedPathway(id);
    setCurrentStep("template");
  };

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setCurrentStep("form");
  };

  const handleFormComplete = (data: CVFormData) => {
    setCurrentStep("review");
    console.log(data);
  };
  const calculateAIFeedback = (cv: CVFormData) => {
    let score = 50; // base score
    const strengths: string[] = [];
    const improvements: string[] = [];

    // Clinical Experience
    if (cv.experience?.currentRole && cv.experience?.currentEmployer) {
      strengths.push("Strong clinical experience section");
      score += 15;
    } else {
      improvements.push("Add details about your current clinical role");
    }

    // Previous roles = career progression
    if (cv.experience?.previousRoles?.length > 1) {
      strengths.push("Clear career progression timeline");
      score += 10;
    } else {
      improvements.push("Add previous roles to show career progression");
    }

    // CPD
    if (cv.achievements?.cpd?.length > 0) {
      strengths.push("Well-documented CPD activities");
      score += 10;
    } else {
      improvements.push(
        "Include CPD activities to demonstrate continuous learning"
      );
    }

    // Teaching
    if (cv.achievements?.teaching?.length > 0) {
      strengths.push("Teaching experience included");
      score += 5;
    } else {
      improvements.push("Include teaching experience details");
    }

    // Research
    if (cv.achievements?.research?.length > 0) {
      strengths.push("Research achievements highlighted");
      score += 5;
    } else {
      improvements.push("Strengthen research section");
    }

    // Audits
    if (cv.achievements?.audits?.length > 0) {
      strengths.push("Audit experience documented");
      score += 5;
    } else {
      improvements.push("Add audit examples");
    }

    return {
      score: Math.min(score, 100),
      strengths,
      improvements,
    };
  };

  const handleEditCV = async () => {
    if (!user_id) return alert("User ID not found");

    try {
      const res = await fetch(
        `import.meta.env.VITE_BACKEND_URL/tools/cv/${user_id}`
      );
      if (!res.ok) throw new Error("Failed to fetch CV");

      const data = await res.json();
      console.log("📄 Edit CV response:", data);

      const cv = data.cv; // 👈 unwrap the CV object

      setFormData({
        personalInfo: cv.personalInfo || {},
        experience: cv.experience || {},
        education: cv.education || {},
        achievements: cv.achievements || {},
        additional: cv.additional || {},
      });

      setIsEditing(true);
      setCurrentStep("form");
    } catch (err) {
      console.error("❌ Error loading CV for editing:", err);
      alert("Error loading CV for editing");
    }
  };
  const handlePreviewCV = async () => {
    if (!user_id) {
      alert("User ID not found");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/tools/cv/${user_id}`
      );
      if (!res.ok) throw new Error("Failed to fetch CV");

      const data = await res.json();
      const cv = data.cv;
      setPreviewData(cv);

      // Update AI Feedback state
      setAiFeedback(calculateAIFeedback(cv));

      setShowPreview(true);
    } catch (err) {
      console.error("❌ Error fetching CV for preview:", err);
      alert("Error fetching CV for preview");
    }
  };

  const handleDownloadPDF = async () => {
    if (!user_id) return alert("User ID not found");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/tools/cv/${user_id}/download`
      );
      if (!res.ok) throw new Error("Failed to download PDF");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CV_${user_id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      alert("Error downloading PDF");
    }
  };

  // --- Render Functions ---
  const renderPathwaySelection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Choose Your NHS Pathway
        </h2>
        <p className="text-gray-600 mt-2">
          Select the pathway that best matches your career stage and goals
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePathwaySelect(item.id)}
            className="group bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {item.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-[1.02]">
              Select This Pathway
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAIReview = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            AI Review Complete
          </CardTitle>
        </CardHeader>
        <CardContent>
          {previewData && (
            <section className="bg-white rounded-xl p-4 shadow-md mt-4">
              <h3 className="text-lg font-semibold text-[#005eb8] mb-2 border-b pb-1">
                AI Feedback
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl font-bold text-green-600">
                  {aiFeedback.score}%
                </div>
                <div>
                  <p className="font-semibold">NHS Compliance Score</p>
                  <p className="text-sm text-gray-500">
                    Calculated based on your CV details
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    Strengths
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {aiFeedback.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    Improvements
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {aiFeedback.improvements.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-4 justify-center">
        <Button variant="outline" onClick={handleEditCV}>
          Edit CV
        </Button>
        <Button onClick={handlePreviewCV} className="flex items-center gap-2">
          <Eye className="h-4 w-4" /> Preview
        </Button>
        <Button onClick={handleDownloadPDF} className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>
    </div>
  );

  // --- Render ---
  return (
    <section className="w-full min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            to="/products"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <FileText className="w-7 h-7 text-blue-700" />
            <h1 className="text-3xl font-bold text-gray-800">CV Booster™</h1>
            <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              AI-Powered
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Build your NHS Gold Standard CV with AI feedback and mentor review
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {currentStep === "pathway" && renderPathwaySelection()}

          {currentStep === "template" && (
            <TemplateSelector
              pathway={selectedPathway}
              onTemplateSelect={handleTemplateSelect}
              onBack={() => setCurrentStep("pathway")}
            />
          )}

          {currentStep === "form" && (
            <CVFormWizard
              pathway={selectedPathway}
              template={selectedTemplate}
              onComplete={handleFormComplete}
              onBack={() => setCurrentStep("template")}
              isEditing={isEditing}
              userId={user_id}
              initialData={formData}
            />
          )}

          {currentStep === "review" && renderAIReview()}
        </div>
      </div>

      {/* --- Preview Modal --- */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-2xl font-bold text-[#005eb8]">
              NHS CV Preview
            </DialogTitle>
            <p className="text-sm text-gray-500">
              Review your CV before downloading or submitting
            </p>
          </DialogHeader>

          {previewData ? (
            <div className="space-y-6 mt-4">
              {/* Personal Info */}
              <section className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Full Name:</span>{" "}
                    {previewData.personalInfo.fullName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {previewData.personalInfo.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {previewData.personalInfo.phone}
                  </p>
                  <p>
                    <span className="font-medium">GMC Number:</span>{" "}
                    {previewData.personalInfo.gmcNumber}
                  </p>
                </div>
              </section>

              {/* Experience */}
              <section className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">
                  Experience
                </h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">
                    {previewData.experience.currentRole}
                  </span>{" "}
                  at {previewData.experience.currentEmployer}
                </p>
                <p className="text-sm text-gray-700">
                  Specialty: {previewData.experience.specialty}
                </p>
                <p className="text-sm text-gray-700">
                  {previewData.experience.yearsExperience} years of experience
                </p>
              </section>

              {/* Education */}
              <section className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">
                  Education
                </h3>
                <p className="text-sm text-gray-700">
                  {previewData.education.medicalSchool} (
                  {previewData.education.graduationYear})
                </p>
                {previewData.education.postgraduateQualifications?.length >
                  0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    {previewData.education.postgraduateQualifications.map(
                      (q: string, idx: number) => (
                        <li key={idx}>{q}</li>
                      )
                    )}
                  </ul>
                )}
              </section>
            </div>
          ) : (
            <p className="text-gray-500 mt-6">No preview data available</p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
