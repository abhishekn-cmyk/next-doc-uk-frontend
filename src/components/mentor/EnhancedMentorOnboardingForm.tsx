import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useCreateMentorApplication } from "@/hooks/useMentor";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Upload,
  FileText,
  CheckCircle,
  User,
  Briefcase,
  Award,
  Clock,
  Shield,
  FileUp,
} from "lucide-react";

const mentorshipAreaOptions = [
  "CV Review & Optimization",
  "Interview Preparation",
  "Clinical Skills Assessment",
  "Medical Registration (GMC)",
  "NHS Job Applications",
  "Specialty Training Guidance",
  "Academic Medicine",
  "Research & Publications",
  "Leadership Development",
  "Career Progression",
];

const specialtyOptions = [
  "General Medicine",
  "General Surgery",
  "Cardiology",
  "Neurology",
  "Psychiatry",
  "Paediatrics",
  "Obstetrics & Gynaecology",
  "Anaesthetics",
  "Radiology",
  "Pathology",
  "Emergency Medicine",
  "General Practice",
  "Public Health",
  "Other",
];

const tierOptions = [
  {
    value: "associate",
    label: "Associate Mentor",
    description: "Recently qualified or early career NHS professional",
  },
  {
    value: "senior",
    label: "Senior Mentor",
    description: "Experienced NHS professional with 5+ years",
  },
  {
    value: "principal",
    label: "Principal Mentor",
    description: "Senior consultant or leadership role",
  },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  gmcNumber: string;
  specialty: string;
  currentNhsTrust: string;
  currentRole: string;
  nhsExperienceYears: number;
  clinicalExperienceYears: number;
  mentorTier: "associate" | "senior" | "principal";
  bio: string;
  mentorshipAreas: string[];
  hourlyRate: number;
  meetLink?: string;
  gdprConsent: boolean;
  recordingConsent: boolean;
  termsConsent: boolean;
  preferredPaymentMethod?: string;
  gmcValid?: boolean;
  noFitnessToPracticeIssues?: boolean;
  codeOfConductAgreement?: boolean;
  qualityReviewConsent?: boolean;
}

// Define form schema with Zod validation
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  gmcNumber: z.string().min(1, "GMC number is required"),
  specialty: z.string().min(1, "Please select your specialty"),
  currentNhsTrust: z.string().min(1, "NHS Trust is required"),
  currentRole: z.string().min(1, "Job title is required"),
  nhsExperienceYears: z.number().min(0, "Experience cannot be negative"),
  clinicalExperienceYears: z.number().min(0, "Experience cannot be negative"),
  mentorTier: z.enum(["associate", "senior", "principal"]),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  mentorshipAreas: z
    .array(z.string())
    .min(1, "Select at least one mentoring area"),
  hourlyRate: z
    .number()
    .min(20, "Minimum rate is £20")
    .max(500, "Maximum rate is £500"),
  meetLink: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, "You must consent to GDPR"),
  recordingConsent: z.boolean(),
  termsConsent: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms"),
  preferredPaymentMethod: z.string().optional(),
  gmcValid: z.boolean().optional(),
  noFitnessToPracticeIssues: z.boolean().optional(),
  codeOfConductAgreement: z.boolean().optional(),
  qualityReviewConsent: z.boolean().optional(),
});

const steps = [
  {
    id: 1,
    title: "Personal Information",
    icon: User,
    fields: ["fullName", "email", "phone"],
  },
  {
    id: 2,
    title: "Professional Credentials",
    icon: Briefcase,
    fields: [
      "gmcNumber",
      "specialty",
      "currentNhsTrust",
      "currentRole",
      "nhsExperienceYears",
      "clinicalExperienceYears",
    ],
  },
  {
    id: 3,
    title: "Mentor Profile",
    icon: Award,
    fields: ["mentorTier", "bio", "mentorshipAreas", "hourlyRate"],
  },
  { id: 4, title: "Availability Setup", icon: Clock, fields: ["meetLink"] },
  { id: 5, title: "Document Upload", icon: FileUp, fields: [] },
  {
    id: 6,
    title: "Consent & Terms",
    icon: Shield,
    fields: ["gdprConsent", "recordingConsent", "termsConsent"],
  },
];

interface EnhancedMentorOnboardingFormProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function EnhancedMentorOnboardingForm({
  onClose,
  isOpen,
}: EnhancedMentorOnboardingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedDocuments, setUploadedDocuments] = useState<{
    [key: string]: File;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      gmcNumber: "",
      specialty: "",
      currentNhsTrust: "",
      currentRole: "",
      nhsExperienceYears: 0,
      clinicalExperienceYears: 0,
      mentorTier: "associate",
      bio: "",
      mentorshipAreas: [],
      hourlyRate: 50,
      meetLink: "",
      recordingConsent: false,

      gmcValid: true,
      noFitnessToPracticeIssues: true,
      codeOfConductAgreement: true,
      qualityReviewConsent: true,
    },
  });

  const progress = (currentStep / steps.length) * 100;

  const handleDocumentUpload = (documentType: string, file: File) => {
    setUploadedDocuments((prev) => ({ ...prev, [documentType]: file }));
    toast.success(`${documentType} uploaded successfully`);
  };

  const nextStep = async () => {
    const currentStepFields = steps[currentStep - 1]?.fields || [];

    // Trigger validation for current step fields
    const isValid = await form.trigger(currentStepFields as any);

    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { mutateAsync: createMentorApplication } = useCreateMentorApplication();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    console.log(formData)

    try {
      const fd = new FormData();

      // Text fields
      fd.append("name", formData.fullName);
      fd.append("fullName", formData.fullName);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("gmcNumber", formData.gmcNumber);
      fd.append("currentNhsTrust", formData.currentNhsTrust);
      fd.append("currentRole", formData.currentRole);
      fd.append("specialty", formData.specialty);
      fd.append(
        "mentorshipAreas",
        JSON.stringify(formData.mentorshipAreas || [])
      );
     

      fd.append("nhsExperienceYears", formData.nhsExperienceYears.toString());
      fd.append(
        "clinicalExperienceYears",
        formData.clinicalExperienceYears.toString()
      );

      fd.append("bio",formData.bio)
      fd.append("hourlyRate", formData.hourlyRate.toString());

      fd.append("mentorTier",formData.mentorTier)
      // Attach files

      await createMentorApplication(fd);

      toast.success("Application submitted successfully!");
      onClose();
    } catch (error: any) {
      console.error("❌ Submission error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic input rendering based on current step
  const renderInputField = (fieldName: string) => {
    switch (fieldName) {
      case "fullName":
        return (
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "email":
        return (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@nhs.net"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "phone":
        return (
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+44 7XXX XXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "gmcNumber":
        return (
          <FormField
            control={form.control}
            name="gmcNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GMC Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234567" {...field} />
                </FormControl>
                <FormDescription>
                  Your General Medical Council registration number
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "specialty":
        return (
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical Specialty</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your specialty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specialtyOptions.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "currentNhsTrust":
        return (
          <FormField
            control={form.control}
            name="currentNhsTrust"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NHS Trust/Organization</FormLabel>
                <FormControl>
                  <Input placeholder="NHS Foundation Trust" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "currentRole":
        return (
          <FormField
            control={form.control}
            name="currentRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Job Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Consultant, Registrar, FY2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "nhsExperienceYears":
        return (
          <FormField
            control={form.control}
            name="nhsExperienceYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of NHS Experience</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    placeholder="5"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "clinicalExperienceYears":
        return (
          <FormField
            control={form.control}
            name="clinicalExperienceYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Clinical Experience</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    placeholder="5"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "mentorTier":
        return (
          <FormField
            control={form.control}
            name="mentorTier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentor Tier</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your mentor tier" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tierOptions.map((tier) => (
                      <SelectItem key={tier.value} value={tier.value}>
                        <div>
                          <div className="font-medium">{tier.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {tier.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "bio":
        return (
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your medical journey, expertise, and what you can offer as a mentor..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Minimum 50 characters. This will be shown to potential
                  mentees.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "mentorshipAreas":
        return (
          <FormField
            control={form.control}
            name="mentorshipAreas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentoring Areas of Expertise</FormLabel>
                <FormDescription>
                  Select all areas where you can provide guidance
                </FormDescription>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {mentorshipAreaOptions.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={area}
                        checked={field.value.includes(area)}
                        onCheckedChange={(checked) => {
                          const updatedAreas = checked
                            ? [...field.value, area]
                            : field.value.filter((item) => item !== area);
                          field.onChange(updatedAreas);
                        }}
                      />
                      <label
                        htmlFor={area}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "hourlyRate":
        return (
          <FormField
            control={form.control}
            name="hourlyRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hourly Rate (£)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="20"
                    max="500"
                    placeholder="50"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Your mentoring fee per hour (£20-500)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "meetLink":
        return (
          <FormField
            control={form.control}
            name="meetLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Calendly Booking Link (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://calendly.com/your-profile"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If you have a Calendly account, paste your booking link here.
                  You can set this up later.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "gdprConsent":
        return (
          <FormField
            control={form.control}
            name="gdprConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>GDPR Consent (Required)</FormLabel>
                  <FormDescription className="text-sm">
                    I consent to NextDoc Global processing my personal data in
                    accordance with the
                    <Button
                      variant="link"
                      className="h-auto p-0 text-primary underline"
                    >
                      Privacy Policy
                    </Button>
                    . This includes storing my application data, documents, and
                    contact information.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        );

      case "recordingConsent":
        return (
          <FormField
            control={form.control}
            name="recordingConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Session Recording Consent (Optional)</FormLabel>
                  <FormDescription className="text-sm">
                    I consent to mentoring sessions being recorded for quality
                    assurance and training purposes. Recordings will be stored
                    securely and only accessed by authorized personnel.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        );

      case "termsConsent":
        return (
          <FormField
            control={form.control}
            name="termsConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Terms & Conditions (Required)</FormLabel>
                  <FormDescription className="text-sm">
                    I agree to the NextDoc Global
                    <Button
                      variant="link"
                      className="h-auto p-0 text-primary underline mx-1"
                    >
                      Terms & Conditions
                    </Button>
                    and
                    <Button
                      variant="link"
                      className="h-auto p-0 text-primary underline mx-1"
                    >
                      Mentor Code of Conduct
                    </Button>
                    . I understand my responsibilities as a mentor.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        );

      default:
        return null;
    }
  };

  const renderStepContent = () => {
    const currentStepData = steps[currentStep - 1];

    if (currentStep === 5) {
      // Document upload step
      return (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Upload Required Documents
            </h3>
            <p className="text-sm text-muted-foreground">
              Please upload the following documents to verify your credentials
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { key: "cv", label: "Current CV/Resume", required: true },
              {
                key: "gmc_certificate",
                label: "GMC Registration Certificate",
                required: true,
              },
              {
                key: "medical_degree",
                label: "Medical Degree Certificate",
                required: true,
              },
              {
                key: "photo_id",
                label: "Photo ID (Passport/Driving License)",
                required: true,
              },
              {
                key: "additional",
                label: "Additional Certificates (Optional)",
                required: false,
              },
            ].map((doc) => (
              <Card key={doc.key} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{doc.label}</p>
                      {doc.required && (
                        <p className="text-xs text-red-500">Required</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {uploadedDocuments[doc.key] ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Uploaded</span>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const input = document.createElement("input");
                          input.type = "file";
                          input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement)
                              .files?.[0];
                            if (file) handleDocumentUpload(doc.key, file);
                          };
                          input.click();
                        }}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === 4) {
      // Availability setup step with additional info
      return (
        <div className="space-y-4">
          {currentStepData.fields.map((fieldName) => (
            <div key={fieldName} className="mb-4">
              {renderInputField(fieldName)}
            </div>
          ))}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Availability Setup</CardTitle>
              <CardDescription>
                We recommend setting up a Calendly account for seamless booking
                management. You can configure your availability and integrate it
                with your calendar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>After approval, you'll be able to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Set your available time slots</li>
                  <li>Sync with your calendar</li>
                  <li>Manage booking preferences</li>
                  <li>Set buffer times between sessions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Regular form steps
    return (
      <div className="space-y-4">
        {currentStepData.fields.map((fieldName) => (
          <div key={fieldName} className="mb-4">
            {renderInputField(fieldName)}
          </div>
        ))}
      </div>
    );
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join as NHS Mentor</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Step {currentStep} of {steps.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-between">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center space-y-2"
                >
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }
                  `}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs text-center max-w-[80px] ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Content */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.error("Validation errors:", errors);
                toast.error("Please fix the errors in the form.");
              })}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {React.createElement(currentStepData.icon, {
                      className: "h-5 w-5",
                    })}
                    {currentStepData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{renderStepContent()}</CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep === steps.length ? (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                ) : (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
