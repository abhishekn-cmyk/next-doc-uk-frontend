import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  ArrowRight,
  User,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
} from "lucide-react";
interface CVFormWizardProps {
  pathway: string;
  template: string;
  onComplete: (data: any) => void;
  onBack: () => void;
  isEditing?: boolean;
  userId?: string;
  initialData?: FormData;
}

type FormData = {
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
  additional: {
    languages: string[];
    interests: string;
    availability: string;
  };
};

const CVFormWizard = ({
  pathway,
  template,
  onComplete,
  onBack,
  isEditing = false,
  userId,
  initialData,
}: CVFormWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    ...(initialData || {}), // put incoming data first
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      gmcNumber: "",
      preferredTitle: "",
      ...(initialData?.personalInfo || {}),
    },
    experience: {
      currentRole: "",
      currentEmployer: "",
      yearsExperience: "",
      specialty: "",
      previousRoles: [],
      ...(initialData?.experience || {}),
    },
    education: {
      medicalSchool: "",
      graduationYear: "",
      postgraduateQualifications: [],
      currentStudy: "",
      ...(initialData?.education || {}),
    },
    achievements: {
      audits: [],
      research: [],
      teaching: [],
      cpd: [],
      ...(initialData?.achievements || {}),
    },
    additional: {
      languages: [],
      interests: "",
      availability: "",
      ...(initialData?.additional || {}),
    },
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const steps = [
    {
      id: "personal",
      title: "Personal Information",
      icon: User,
      description: "Basic contact details and identifiers",
    },
    {
      id: "experience",
      title: "Clinical Experience",
      icon: Briefcase,
      description: "Current role and work history",
    },
    {
      id: "education",
      title: "Education & Qualifications",
      icon: GraduationCap,
      description: "Medical education and certifications",
    },
    {
      id: "achievements",
      title: "Achievements & CPD",
      icon: Award,
      description: "Audits, research, teaching, and development",
    },
    {
      id: "additional",
      title: "Additional Information",
      icon: FileText,
      description: "Languages, interests, and availability",
    },
  ];

  // Update a single field
  const updateFormData = <
    S extends keyof FormData,
    F extends keyof FormData[S]
  >(
    section: S,
    field: F,
    value: FormData[S][F]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // Add item to array
  const addArrayItem = <S extends keyof FormData, F extends keyof FormData[S]>(
    section: S,
    field: F,
    item: FormData[S][F] extends Array<infer T> ? T : never
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...(prev[section][field] as any[]), item],
      },
    }));
  };

  // Remove item from array
  const removeArrayItem = <
    S extends keyof FormData,
    F extends keyof FormData[S]
  >(
    section: S,
    field: F,
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: (prev[section][field] as any[]).filter((_, i) => i !== index),
      },
    }));
  };

  // ------------------- BACKEND SUBMIT -------------------
  // --- CREATE CV ---
  const createCV = async () => {
    const token = localStorage.getItem("token");
    if (!token || !userId) {
      toast.error("Please sign in first");
      return;
    }

    try {
      console.log("🆕 Creating new CV for user:", userId, formData);

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/tools/cv`,
        {
          user_id: userId,
          token,
          category: "CVBOOSTER",
          personalInfo: formData.personalInfo,
          experience: formData.experience,
          education: formData.education,
          achievements: formData.achievements,
          additional: formData.additional,
        }
      );

      console.log("✅ CV created:", response.data);
      toast.success("CV saved successfully!");
      onComplete(response.data.cv);
    } catch (error: any) {
      console.error("❌ CV Create Error:", error);
      toast.error(error?.response?.data?.error || "Failed to save CV");
    }
  };

  // --- UPDATE CV ---
  const updateCV = async () => {
    const token = localStorage.getItem("token");
    if (!token || !userId) {
      toast.error("Please sign in first");
      return;
    }

    try {
      console.log("🔄 Updating CV for user:", userId, formData);

      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/tools/cv/${userId}/update`,
        {
          token,
          category: "CVBOOSTER",
          personalInfo: formData.personalInfo,
          experience: formData.experience,
          education: formData.education,
          achievements: formData.achievements,
          additional: formData.additional,
        }
      );

      console.log("✅ CV updated:", response.data);
      toast.success("CV updated successfully!");
      onComplete(response.data.cv);
    } catch (error: any) {
      console.error("❌ CV Update Error:", error);
      toast.error(error?.response?.data?.error || "Failed to update CV");
    }
  };
  const handleSubmit = () => {
    if (isEditing) {
      updateCV();
    } else {
      createCV();
    }
  };

  // ------------------- STEP NAVIGATION -------------------
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(); // submit on last step
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else onBack();
  };

  // ------------------- RENDER STEPS -------------------
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderPersonalInfo();
      case 1:
        return renderExperience();
      case 2:
        return renderEducation();
      case 3:
        return renderAchievements();
      case 4:
        return renderAdditional();
      default:
        return null;
    }
  };

  // ------------------- RENDER FUNCTIONS -------------------
  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name (as per GMC registration)</Label>
          <Input
            id="fullName"
            value={formData.personalInfo.fullName}
            onChange={(e) =>
              updateFormData("personalInfo", "fullName", e.target.value)
            }
            placeholder="Dr. John Smith"
          />
        </div>
        <div>
          <Label htmlFor="preferredTitle">Preferred Title</Label>
          <Select
            onValueChange={(value) =>
              updateFormData("personalInfo", "preferredTitle", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr">Dr.</SelectItem>
              <SelectItem value="prof">Prof.</SelectItem>
              <SelectItem value="mr">Mr.</SelectItem>
              <SelectItem value="ms">Ms.</SelectItem>
              <SelectItem value="mrs">Mrs.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.personalInfo.email}
            onChange={(e) =>
              updateFormData("personalInfo", "email", e.target.value)
            }
            placeholder="john.smith@nhs.net"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={formData.personalInfo.phone}
            onChange={(e) =>
              updateFormData("personalInfo", "phone", e.target.value)
            }
            placeholder="+44 7XXX XXXXXX"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="gmcNumber">GMC Number</Label>
        <Input
          id="gmcNumber"
          value={formData.personalInfo.gmcNumber}
          onChange={(e) =>
            updateFormData("personalInfo", "gmcNumber", e.target.value)
          }
          placeholder="1234567"
        />
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="currentRole">Current Role/Position</Label>
          <Input
            id="currentRole"
            value={formData.experience.currentRole}
            onChange={(e) =>
              updateFormData("experience", "currentRole", e.target.value)
            }
            placeholder="ST3 Internal Medicine"
          />
        </div>
        <div>
          <Label htmlFor="currentEmployer">Current NHS Trust/Employer</Label>
          <Input
            id="currentEmployer"
            value={formData.experience.currentEmployer}
            onChange={(e) =>
              updateFormData("experience", "currentEmployer", e.target.value)
            }
            placeholder="Royal London Hospital"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="specialty">Specialty/Department</Label>
          <Input
            id="specialty"
            value={formData.experience.specialty}
            onChange={(e) =>
              updateFormData("experience", "specialty", e.target.value)
            }
            placeholder="Internal Medicine"
          />
        </div>
        <div>
          <Label htmlFor="yearsExperience">Years of Clinical Experience</Label>
          <Select
            onValueChange={(value) =>
              updateFormData("experience", "yearsExperience", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="2-3">2-3 years</SelectItem>
              <SelectItem value="4-5">4-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="medicalSchool">Medical School</Label>
          <Input
            id="medicalSchool"
            value={formData.education.medicalSchool}
            onChange={(e) =>
              updateFormData("education", "medicalSchool", e.target.value)
            }
            placeholder="University of London"
          />
        </div>
        <div>
          <Label htmlFor="graduationYear">Graduation Year</Label>
          <Input
            id="graduationYear"
            value={formData.education.graduationYear}
            onChange={(e) =>
              updateFormData("education", "graduationYear", e.target.value)
            }
            placeholder="2018"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="currentStudy">Current Study/Training Programme</Label>
        <Input
          id="currentStudy"
          value={formData.education.currentStudy}
          onChange={(e) =>
            updateFormData("education", "currentStudy", e.target.value)
          }
          placeholder="Internal Medicine Training Programme"
        />
      </div>
      <div>
        <Label>Postgraduate Qualifications</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "MRCP",
            "MRCS",
            "MRCOG",
            "MRCPCH",
            "FRCP",
            "FRCS",
            "PhD",
            "MSc",
            "Other",
          ].map((qual) => (
            <div key={qual} className="flex items-center space-x-2">
              <Checkbox
                id={qual}
                checked={formData.education.postgraduateQualifications.includes(
                  qual
                )}
                onCheckedChange={(checked) => {
                  if (checked)
                    addArrayItem(
                      "education",
                      "postgraduateQualifications",
                      qual
                    );
                  else {
                    const index =
                      formData.education.postgraduateQualifications.indexOf(
                        qual
                      );
                    if (index > -1)
                      removeArrayItem(
                        "education",
                        "postgraduateQualifications",
                        index
                      );
                  }
                }}
              />
              <Label htmlFor={qual}>{qual}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <div>
        <Label>Teaching Experience</Label>
        <Textarea
          placeholder="Describe your teaching roles..."
          className="mt-2"
          value={formData.achievements.teaching}
          onChange={(e) =>
            updateFormData("achievements", "teaching", [e.target.value])
          }
        />
      </div>
      <div>
        <Label>Audit & Quality Improvement</Label>
        <Textarea
          placeholder="List your audits..."
          className="mt-2"
          value={formData.achievements.audits}
          onChange={(e) =>
            updateFormData("achievements", "audits", [e.target.value])
          }
        />
      </div>
      <div>
        <Label>Research & Publications</Label>
        <Textarea
          placeholder="Include research projects..."
          className="mt-2"
          value={formData.achievements.research}
          onChange={(e) =>
            updateFormData("achievements", "research", [e.target.value])
          }
        />
      </div>
      <div>
        <Label>CPD & Professional Development</Label>
        <Textarea
          placeholder="Recent courses, conferences..."
          className="mt-2"
          value={formData.achievements.cpd}
          onChange={(e) =>
            updateFormData("achievements", "cpd", [e.target.value])
          }
        />
      </div>
    </div>
  );

  const renderAdditional = () => (
    <div className="space-y-4">
      <div>
        <Label>Languages Spoken</Label>
        <Input
          placeholder="English, Spanish..."
          className="mt-2"
          value={formData.additional.languages.join(", ")}
          onChange={(e) =>
            updateFormData(
              "additional",
              "languages",
              e.target.value.split(",").map((s) => s.trim())
            )
          }
        />
      </div>
      <div>
        <Label>Professional Interests</Label>
        <Textarea
          placeholder="Clinical interests..."
          className="mt-2"
          value={formData.additional.interests}
          onChange={(e) =>
            updateFormData("additional", "interests", e.target.value)
          }
        />
      </div>
      <div>
        <Label>Availability & Additional Notes</Label>
        <Textarea
          placeholder="Notice period..."
          className="mt-2"
          value={formData.additional.availability}
          onChange={(e) =>
            updateFormData("additional", "availability", e.target.value)
          }
        />
      </div>
    </div>
  );

  // ------------------- RENDER COMPONENT -------------------
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Build Your NHS CV
        </h2>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      index < currentStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{steps[currentStep].title}</h3>
          <p className="text-muted-foreground">
            {steps[currentStep].description}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Step {currentStep + 1} of {steps.length}
          </CardTitle>
          <CardDescription>
            Pathway: {pathway} | Template: {template}
          </CardDescription>
        </CardHeader>
        <CardContent>{renderStepContent()}</CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentStep === 0 ? "Back to Templates" : "Previous"}
        </Button>
        <Button onClick={handleNext} className="flex items-center gap-2">
          {currentStep === steps.length - 1 ? "Generate CV" : "Next"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CVFormWizard;
