export interface IBackground {
  degree?: string;
  institution?: string;
  year?: number;
  description?: string;
  achievements?: string[];
}

export interface INhsDetails {
  trustOrOrganization?: string;
  role?: string;
  medicalSpecialty?: string;
  subspecialty?: string;
  experienceYears?: number;
}

export interface IMentor {
  _id: string;
  language:string;
  badgeLevel:string;
  // =====================
  // Basic Info
  // =====================
  name: string;
  specialities: string[];
  rating?: number;
  address?: string;
  location?: string;
  designation?: string;
  department?: string;
  position?: string;

  // =====================
  // Personal
  // =====================
  fullName: string;
  email: string;
  phone: string;
  description?: string;
  image?: string;
  profilePicture?: string;

  // =====================
  // Professional
  // =====================
  gmcNumber: string;
  currentNhsTrust: string;
  currentRole: string;
  specialty: string;
  subspecialty?: string;
  clinicalExperienceYears: number;
  nhsExperienceYears: number;
  postgraduateQualifications?: string[];
  teachingRoles?: string[];
  mentorshipExperience?: string;

  // =====================
  // Relationships
  // =====================
  mentees?: string[]; // array of mentee IDs

  // =====================
  // Background
  // =====================
  background?: IBackground[];

  // =====================
  // NHS Details
  // =====================
  isNhsMentor?: boolean;
  nhsDetails?: INhsDetails;

  // =====================
  // Mentorship Areas
  // =====================
  mentorshipAreas: string[];

  // =====================
  // Languages
  // =====================
  languagesSpoken: string[];

  // =====================
  // Availability & Mentorship
  // =====================
  availability?: string; // free text / description
  mentorshipFormat?: "online" | "onsite" | "hybrid";
  mentoringApproach?: string;
  successStories?: string;
  handlingDifficultMentees?: string;

  // =====================
  // Compliance
  // =====================
  gmcValid: boolean;
  noFitnessToPracticeIssues: boolean;
  codeOfConductAgreement: boolean;
  qualityReviewConsent: boolean;
  gdprCompliance: boolean;

  // =====================
  // Payment & CPD
  // =====================
  preferredPaymentMethod: string;
  taxInfo?: string;
  cpdParticipation?: boolean;
  hourlyRate?: number; // from application form

  // =====================
  // Additional Info
  // =====================
  areasOfInterest?: string[];
  allowPublicProfile?: boolean;
  exclusiveMatching?: boolean;
  otherNotes?: string;

  // =====================
  // Documents
  // =====================
  gmcCertificate?: string;
  specialtyCertificates?: string[];
  cvDocument?: string;
  indemnityInsurance?: string;
  uploadedDocuments?: {
    cv?: File | string;
    gmc_certificate?: File | string;
    medical_degree?: File | string;
    photo_id?: File | string;
    additional?: File[] | string[];
  };
  documentsMetadata?: Record<string, string>; // saved file paths

  // =====================
  // Application Status
  // =====================
  status?: "pending" | "approved" | "rejected" | "active" | "inactive";
  referralCode?: string;

  // =====================
  // Optional extras for UI
  // =====================
  testimonial?: string;

  // =====================
  // Mentorship Tier & Bio
  // =====================
  mentorTier?: string;
  bio?: string;
  calendlyLink?: string;
  recordingConsent?: boolean;
  termsConsent?: boolean;
  gdprConsent?: boolean;
}



export interface IMentorForm {
  // Basic info
  name: string;
  fullName: string;
  email: string;
  phone: string;
  specialities: string[];

  // Professional
  gmcNumber: string;
  currentNhsTrust: string;
  currentRole: string;
  specialty: string;
  subspecialty?: string;
  clinicalExperienceYears: number;
  nhsExperienceYears: number;
  postgraduateQualifications?: string[];
  teachingRoles?: string[];
  mentorshipExperience?: string;

  // Mentorship
  mentorshipAreas: string[];
  languagesSpoken: string[];
  availability?: string;
  mentorshipFormat?: "online" | "onsite" | "hybrid";
  mentoringApproach?: string;
  successStories?: string;
  handlingDifficultMentees?: string;
  calendlyLink?: string;
  mentorTier?: string;
  bio?: string;
  hourlyRate?: number;

  // Compliance
  gmcValid: boolean;
  noFitnessToPracticeIssues: boolean;
  codeOfConductAgreement: boolean;
  qualityReviewConsent: boolean;
  gdprCompliance: boolean;
  gdprConsent: boolean;
  recordingConsent?: boolean;
  termsConsent: boolean;

  // Payment & CPD
  preferredPaymentMethod: string;
  taxInfo?: string;
  cpdParticipation?: boolean;

  // Optional
  areasOfInterest?: string[];
  allowPublicProfile?: boolean;
  exclusiveMatching?: boolean;
  otherNotes?: string;

  // Files
  uploadedDocuments?: {
    cv?: File;
    gmc_certificate?: File;
    medical_degree?: File;
    photo_id?: File;
    additional?: File[];
  };
}