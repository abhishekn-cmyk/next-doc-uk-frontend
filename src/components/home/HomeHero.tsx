import { Button } from "@/components/ui/button";
import {
  Users,
  Trophy,
  ArrowRight,
  Heart,
  GraduationCap,
  BotMessageSquare,
  X,
  ArrowLeft,
  Upload,Check
} from "lucide-react";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import nhsHeroImage from "@/assets/nhs-medical-hero.jpg";
import { RotatingMentorDisplay } from "@/components/RotatingMentorDisplay";
import ProfessionalDevelopment from "./ProfessionalDevelopment";
import Gapmap from "./Gapmap";
import axios from "axios";
import NextDoc from "./NextDoc";
import Evidence from "./Evidence";
import Nhs from "./Nhs";
import ThreeCards from "./ThreeCards";
import { useState, type ChangeEvent } from "react";

// Define types for the form data
interface FormData {
  // Step 1: Personal Information
  fullName: string;
  preferredName: string;
  dateOfBirth: string;
  contactEmail: string;
  phoneNumber: string;
  residentialAddress: string;

  // Step 2: Professional Credentials
  gmcNumber: string;
  currentEmployer: string;
  currentRole: string;
  specialty: string;
  subspecialty: string;
  yearsClinicalExperience: string;
  yearsNhsExperience: string;
  postgraduateQualifications: string;
  teachingRoles: string;
  previousMentorshipExperience: string;

  // Step 3: Mentor Expertise
  areasOfMentorship: string[];
  languagesSpoken: string[];
  typicalAvailability: string;
  preferredMentorshipFormat: string;

  // Step 4: Compliance & Declarations
  gmcRegistrationValid: boolean;
  noFitnessToPractice: boolean;
  codeOfConduct: boolean;
  qualityReview: boolean;
  gdprCompliance: boolean;

  // Step 5: Platform & Payment
  paymentMethod: string;
  taxInfo: string;
  participateCpd: string;
  developmentInterests: string;

  // Step 6: Additional Information
  publicProfile: string;
  exclusiveMatching: string;
  additionalNotes: string;

  // Step 7: Document Upload
  gmcCertificate: File | null;
  specialtyQualifications: File | null;
  cv: File | null;
  insuranceProof: File | null;
}

export default function HomeHero() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const totalSteps = 8;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1: Personal Information
    fullName: "",
    preferredName: "",
    dateOfBirth: "",
    contactEmail: "",
    phoneNumber: "",
    residentialAddress: "",

    // Step 2: Professional Credentials
    gmcNumber: "",
    currentEmployer: "",
    currentRole: "",
    specialty: "",
    subspecialty: "",
    yearsClinicalExperience: "",
    yearsNhsExperience: "",
    postgraduateQualifications: "",
    teachingRoles: "",
    previousMentorshipExperience: "",

    // Step 3: Mentor Expertise
    areasOfMentorship: [],
    languagesSpoken: [],
    typicalAvailability: "",
    preferredMentorshipFormat: "",

    // Step 4: Compliance & Declarations
    gmcRegistrationValid: false,
    noFitnessToPractice: false,
    codeOfConduct: false,
    qualityReview: false,
    gdprCompliance: false,

    // Step 5: Platform & Payment
    paymentMethod: "",
    taxInfo: "",
    participateCpd: "",
    developmentInterests: "",

    // Step 6: Additional Information
    publicProfile: "",
    exclusiveMatching: "",
    additionalNotes: "",

    // Step 7: Document Upload
    gmcCertificate: null,
    specialtyQualifications: null,
    cv: null,
    insuranceProof: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      if (name === "areasOfMentorship" || name === "languagesSpoken") {
        // Handle arrays for checkboxes with proper typing
        const currentArray = formData[name as keyof FormData] as string[];
        const newValue = checked
          ? [...currentArray, value]
          : currentArray.filter((item) => item !== value);
        setFormData({ ...formData, [name]: newValue });
      } else {
        // Handle boolean checkboxes
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData({ ...formData, [fieldName]: file });
    }
  };
   const [query, setQuery] = useState("");

  const handleSubmits = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // prevents the default form submission
  if (!query.trim()) return;
  console.log("User asked:", query);
};
  const handleSubmit = async () => {
    try {
      const data = new FormData();

      // Required string fields
      data.append("fullName", formData.fullName || "");
      data.append("contactEmail", formData.contactEmail || "");
      data.append("phoneNumber", formData.phoneNumber || "");
      data.append("specialty", formData.specialty || "");
      data.append("gmcNumber", formData.gmcNumber || "");
      data.append("currentEmployer", formData.currentEmployer || "");
      data.append("currentRole", formData.currentRole || "");
      data.append("paymentMethod", formData.paymentMethod || "");

      // Required number fields
      data.append(
        "yearsClinicalExperience",
        formData.yearsClinicalExperience || "0"
      );
      data.append("yearsNhsExperience", formData.yearsNhsExperience || "0");

      // Boolean fields
      data.append(
        "gmcRegistrationValid",
        formData.gmcRegistrationValid ? "true" : "false"
      );
      data.append(
        "noFitnessToPractice",
        formData.noFitnessToPractice ? "true" : "false"
      );
      data.append("codeOfConduct", formData.codeOfConduct ? "true" : "false");
      data.append("qualityReview", formData.qualityReview ? "true" : "false");
      data.append("gdprCompliance", formData.gdprCompliance ? "true" : "false");
      data.append("participateCpd", formData.participateCpd ? "yes" : "no");

      // Arrays (convert to comma-separated strings)
      data.append(
        "areasOfMentorship",
        formData.areasOfMentorship?.length
          ? formData.areasOfMentorship.join(",")
          : ""
      );
      data.append(
        "languagesSpoken",
        formData.languagesSpoken?.length
          ? formData.languagesSpoken.join(",")
          : ""
      );
      data.append(
        "postgraduateQualifications",
        formData.postgraduateQualifications || ""
      );
      data.append("teachingRoles", formData.teachingRoles || "");
      data.append(
        "previousMentorshipExperience",
        formData.previousMentorshipExperience || ""
      );
      data.append("developmentInterests", formData.developmentInterests || "");

      // Optional fields
      data.append("typicalAvailability", formData.typicalAvailability || "");
      data.append(
        "preferredMentorshipFormat",
        formData.preferredMentorshipFormat || ""
      );
      data.append("publicProfile", formData.publicProfile || "");
      data.append("exclusiveMatching", formData.exclusiveMatching || "");
      data.append("additionalNotes", formData.additionalNotes || "");

      // Append files
      if (formData.gmcCertificate)
        data.append("gmcCertificate", formData.gmcCertificate);
      if (formData.specialtyQualifications)
        data.append("specialtyCertificates", formData.specialtyQualifications);
      if (formData.cv) data.append("cv", formData.cv);
      if (formData.insuranceProof)
        data.append("insuranceProof", formData.insuranceProof);

      // POST request
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/mentor/onboarding`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Mentor application submitted successfully!");
      setOpen(false);

      // Reset form
      setFormData({
        fullName: "",
        preferredName: "",
        dateOfBirth: "",
        contactEmail: "",
        phoneNumber: "",
        residentialAddress: "",
        gmcNumber: "",
        currentEmployer: "",
        currentRole: "",
        specialty: "",
        subspecialty: "",
        yearsClinicalExperience: "",
        yearsNhsExperience: "",
        postgraduateQualifications: "",
        teachingRoles: "",
        previousMentorshipExperience: "",
        areasOfMentorship: [],
        languagesSpoken: [],
        typicalAvailability: "",
        preferredMentorshipFormat: "",
        gmcRegistrationValid: false,
        noFitnessToPractice: false,
        codeOfConduct: false,
        qualityReview: false,
        gdprCompliance: false,
        paymentMethod: "",
        taxInfo: "",
        participateCpd: "",
        developmentInterests: "",
        publicProfile: "",
        exclusiveMatching: "",
        additionalNotes: "",
        gmcCertificate: null,
        specialtyQualifications: null,
        cv: null,
        insuranceProof: null,
      });

      setCurrentStep(1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application. Please try again.");
    }
  };
  const navigate=useNavigate();

  // calculate progress % dynamically
  const progress = (currentStep / totalSteps) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name (as per GMC registration) *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Name / Title *
              </label>
              <input
                type="text"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleInputChange}
                placeholder="Dr./Prof./Mr./Ms."
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Residential Address (optional)
              </label>
              <textarea
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                rows={2}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              ></textarea>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GMC Number *
              </label>
              <input
                type="text"
                name="gmcNumber"
                value={formData.gmcNumber}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current NHS Trust/Employer *
              </label>
              <input
                type="text"
                name="currentEmployer"
                value={formData.currentEmployer}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Role / Job Title *
              </label>
              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleInputChange}
                placeholder="e.g., Consultant, SAS, Clinical Lecturer"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialty *
              </label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subspecialty
              </label>
              <input
                type="text"
                name="subspecialty"
                value={formData.subspecialty}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of Clinical Experience (Total) *
              </label>
              <input
                type="number"
                name="yearsClinicalExperience"
                value={formData.yearsClinicalExperience}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of NHS Experience *
              </label>
              <input
                type="number"
                name="yearsNhsExperience"
                value={formData.yearsNhsExperience}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postgraduate Qualifications
              </label>
              <input
                type="text"
                name="postgraduateQualifications"
                value={formData.postgraduateQualifications}
                onChange={handleInputChange}
                placeholder="MRCP, MRCS, FRCS, PhD, etc."
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teaching or Supervisory Roles
              </label>
              <input
                type="text"
                name="teachingRoles"
                value={formData.teachingRoles}
                onChange={handleInputChange}
                placeholder="e.g., Clinical Supervisor, Educational Supervisor"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Previous Mentorship or Coaching Experience
              </label>
              <textarea
                name="previousMentorshipExperience"
                value={formData.previousMentorshipExperience}
                onChange={handleInputChange}
                rows={3}
                placeholder="Brief description"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              ></textarea>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Mentorship (select all that apply) *
              </label>
              <div className="space-y-2">
                {[
                  "PLAB Preparation",
                  "NHS Job Interview Coaching",
                  "CV/Portfolio Review",
                  "Postgraduate Exam Support (MRCP, MRCS, MRCOG, MRCPCH, etc.)",
                  "Specialty-Specific Clinical Mentorship",
                  "Leadership and Career Progression",
                ].map((area) => (
                  <div key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      id={area}
                      name="areasOfMentorship"
                      value={area}
                      checked={formData.areasOfMentorship.includes(area)}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={area}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {area}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages Spoken *
              </label>
              <div className="space-y-2">
                {[
                  "English",
                  "Hindi",
                  "Arabic",
                  "Spanish",
                  "French",
                  "Other",
                ].map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      id={language}
                      name="languagesSpoken"
                      value={language}
                      checked={formData.languagesSpoken.includes(language)}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={language}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typical Availability *
              </label>
              <input
                type="text"
                name="typicalAvailability"
                value={formData.typicalAvailability}
                onChange={handleInputChange}
                placeholder="days/times per week"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Mentorship Format *
              </label>
              <select
                name="preferredMentorshipFormat"
                value={formData.preferredMentorshipFormat}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              >
                <option value="">Select format</option>
                <option value="Video Call">Video Call</option>
                <option value="Phone Call">Phone Call</option>
                <option value="In-Person">In-Person</option>
                <option value="Email">Email</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="space-y-6 mt-6">
              {/* Question 1 */}
              <div>
                <label className="block text-black font-medium mb-1">
                  Describe your approach to mentoring and coaching{" "}
                  <span className="text-black">*</span>
                </label>
                <textarea
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={3}
                  required
                ></textarea>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block font-medium mb-1">
                  Success stories or outcomes from mentorship (brief)
                </label>
                <textarea
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={3}
                ></textarea>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block text-black font-medium mb-1">
                  How do you handle difficult mentees or challenging scenarios?{" "}
                  <span className="text-black">*</span>
                </label>
                <textarea
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gmcRegistrationValid"
                  name="gmcRegistrationValid"
                  checked={formData.gmcRegistrationValid}
                  onChange={handleInputChange}
                  className="h-4 w-4 mt-1 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="gmcRegistrationValid"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I confirm I hold a full, valid GMC registration without
                  restrictions *
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="noFitnessToPractice"
                  name="noFitnessToPractice"
                  checked={formData.noFitnessToPractice}
                  onChange={handleInputChange}
                  className="h-4 w-4 mt-1 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="noFitnessToPractice"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I confirm I have no current or past fitness to practice
                  investigations or sanctions *
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="codeOfConduct"
                  name="codeOfConduct"
                  checked={formData.codeOfConduct}
                  onChange={handleInputChange}
                  className="h-4 w-4 mt-1 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="codeOfConduct"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to comply with NextDoc Global's mentor code of conduct
                  and confidentiality policies *
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="qualityReview"
                  name="qualityReview"
                  checked={formData.qualityReview}
                  onChange={handleInputChange}
                  className="h-4 w-4 mt-1 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="qualityReview"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I consent to periodic quality review and feedback collection
                  from mentees *
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gdprCompliance"
                  name="gdprCompliance"
                  checked={formData.gdprCompliance}
                  onChange={handleInputChange}
                  className="h-4 w-4 mt-1 text-[#224488] focus:ring-[#224488] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="gdprCompliance"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to adhere to GDPR and data protection policies in all
                  mentor interactions *
                </label>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Payment Method *
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
                required
              >
                <option value="">Select payment method</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
                <option value="Stripe">Stripe</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tax Identification Number or relevant tax info
              </label>
              <input
                type="text"
                name="taxInfo"
                value={formData.taxInfo}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Willingness to participate in CPD accreditation activities or
                content creation *
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="participateYes"
                    name="participateCpd"
                    value="Yes"
                    checked={formData.participateCpd === "Yes"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                    required
                  />
                  <label
                    htmlFor="participateYes"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="participateNo"
                    name="participateCpd"
                    value="No"
                    checked={formData.participateCpd === "No"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                  />
                  <label
                    htmlFor="participateNo"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Areas of interest for future development
              </label>
              <textarea
                name="developmentInterests"
                value={formData.developmentInterests}
                onChange={handleInputChange}
                rows={3}
                placeholder="e.g., interview workshops, webinars, online courses"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              ></textarea>
            </div>
          </>
        );

      case 7:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you open to public profiles/testimonials being displayed? *
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="publicProfileYes"
                    name="publicProfile"
                    value="Yes"
                    checked={formData.publicProfile === "Yes"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                    required
                  />
                  <label
                    htmlFor="publicProfileYes"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="publicProfileNo"
                    name="publicProfile"
                    value="No"
                    checked={formData.publicProfile === "No"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                  />
                  <label
                    htmlFor="publicProfileNo"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you want to be matched exclusively with certain specialties
                or exams? *
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="exclusiveMatchingYes"
                    name="exclusiveMatching"
                    value="Yes"
                    checked={formData.exclusiveMatching === "Yes"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                    required
                  />
                  <label
                    htmlFor="exclusiveMatchingYes"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="exclusiveMatchingNo"
                    name="exclusiveMatching"
                    value="No"
                    checked={formData.exclusiveMatching === "No"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#224488] focus:ring-[#224488] border-gray-300"
                  />
                  <label
                    htmlFor="exclusiveMatchingNo"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Any other notes or relevant info you wish to share?
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#224488] focus:outline-none"
              ></textarea>
            </div>
          </>
        );

      case 8:
        return (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Please prepare the following documents for upload:
              </p>

              <div className="mb-4 border rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  Required Documents:
                </h3>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>GMC Registration Certificate (scan or screenshot)</li>
                  <li>Proof of Specialty Qualifications (if available)</li>
                </ul>
              </div>

              <div className="border rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  Optional Documents:
                </h3>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Updated CV or Professional Bio</li>
                  <li>Proof of Professional Indemnity Insurance</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  GMC Registration Certificate{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 hover:border-gray-400 bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, PNG, JPG or JPEG (MAX. 10MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, "gmcCertificate")}
                      accept=".pdf,.png,.jpg,.jpeg"
                      required
                    />
                  </label>
                </div>

                {formData.gmcCertificate && (
                  <p className="mt-2 text-xs text-green-600">
                    File selected: {formData.gmcCertificate.name}
                  </p>
                )}
              </div>
            </div>
          </>
        );

      default:
        return <div>Step not found</div>;
    }
  };

  const getStepTitle = () => {
    const titles: Record<number, string> = {
      1: "Personal Information",
      2: "Professional Credentials",
      3: "Mentor Expertise",
      4: "Compliance & Declarations",
      5: "Platform & Payment",
      6: "Additional Information",
      7: "Document Upload",
      8: "Review & Submit",
    };
    return titles[currentStep] || "Mentor Onboarding";
  };

  return (
    <>
      {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={nhsHeroImage}
          alt="NHS Medical Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to <span className="text-emerald-200">NHS Success</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-primary-foreground/90">
              AI-powered tools, mentor-validated guidance, and structured
              learning pathways for doctors preparing for NHS careers.
            </p>

            {/* AI Ask Bar */}
            <form
              onSubmit={handleSubmits}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-2xl"
            >
              <Input
                type="text"
                placeholder="Ask anything about NHS careers, PLAB, CVs…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-6 text-base rounded-xl shadow-lg border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-2 focus-visible:ring-emerald-300"
              />
              <Button
                type="submit"
                size="lg"
                disabled={!query.trim()}
                className="w-full sm:w-auto px-6 bg-blue-500 hover:bg-emerald-600 text-white font-semibold transition-all"
              >
                Ask NextDoc AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Link to={"/get-started"} className="w-full">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full px-4 sm:px-8 font-semibold shadow-md"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>

              <Link to="/products" className="w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full px-4 sm:px-8 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground font-semibold shadow-md"
                >
                  Explore Programmes
                </Button>
              </Link>

              <a
                href="https://www.instagram.com/nextdoc_uk?igsh=d2ljaW1weDJoZ3Bv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full px-4 sm:px-8 border-pink-500 text-pink-500 bg-background hover:bg-pink-500 hover:text-white font-semibold shadow-md"
                >
                  <span className="hidden sm:inline">Join Our Insta Community</span>
                  <span className="sm:hidden">Instagram</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-primary-foreground/90 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>NHS-focused Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Expert Mentorship</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Proven Results</span>
              </div>
            </div>

            {/* Promo Card */}
          
      {/* Top Line: LIMITED ACCESS + Tick */}
   <div className="mt-6 sm:mt-8 p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl backdrop-blur-sm shadow-lg">
      {/* Top Line: LIMITED ACCESS + Tick in circle */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
          LIMITED ACCESS
        </span>
        {/* Tick inside circle */}
        <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </span>
      </div>

      {/* Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
          <Trophy className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-emerald-700">
          FREE PLAB Quiz Bank
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-emerald-700/80 mb-4">
        847 spots remaining for this month
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-4">
        <li className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          2,000+ MLA-aligned questions
        </li>
        <li className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          AI-powered explanations
        </li>
        <li className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          Progress tracking & analytics
        </li>
      </ul>

      {/* Full Width Button */}
      <Link to="/exams/plab" className="w-full block">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 text-sm sm:text-base flex items-center justify-center gap-2">
          Claim Free Access
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>

            {/* Instagram Note */}
            <div className="mt-4 sm:mt-6 p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <p className="text-xs sm:text-sm text-primary-foreground/90">
                📲 Daily Quiz & AI Access via Instagram
              </p>
            </div>
          </div>

          {/* Right Column: Rotating Mentors */}
          <div className="mt-8 lg:mt-0">
            <RotatingMentorDisplay />
          </div>
        </div>
      </div>
    </section>

      {/* Professional Development Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfessionalDevelopment />
        </div>
      </section>

      {/* Gapmap Section */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-white p-4 py-8 sm:py-12 flex items-center justify-center">
        <Gapmap />
      </section>

      {/* Three Cards Section */}
      <section className="py-8 sm:py-12">
        <ThreeCards />
      </section>

      {/* NextDoc Section */}
      <section className="py-8 sm:py-12">
        <NextDoc />
      </section>

      {/* Evidence Section */}
      <section className="py-8 sm:py-12">
        <Evidence />
      </section>

      {/* NHS Section */}
      <section className="py-8 sm:py-12">
        <Nhs />
      </section>

      {/* CTA Button Section */}
      <section>
        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-[#224488] font-semibold py-4 px-6 
                         rounded-xl inline-flex items-center justify-center gap-2 
                         border border-gray-300 shadow-sm transition-all duration-300"
       onClick={()=> navigate('/mentors')} >
          Get Mentored <Users className="h-5 w-5 text-[#224488]" />
        </button>
      </section>

      <br />
      <hr />
      <br />

      <section>
        <button
          onClick={() => setOpen(true)}
          className="w-full hover:bg-gray-200 text-[#224488] font-semibold py-4 px-6 
                     rounded-xl inline-flex items-center justify-center gap-2 
                     border border-gray-300 shadow-sm transition-all duration-300"
        >
          Become a Mentor <GraduationCap className="h-5 w-5 text-[#224488]" />
        </button>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-14 h-14 rounded-full bg-[#224488] shadow-lg flex items-center justify-center text-white hover:bg-[#1a3466] transition duration-300"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <BotMessageSquare />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-6 py-4 sticky top-0 bg-white z-10">
              <h2 className="text-lg font-semibold text-[#224488]">
                Mentor Onboarding Questionnaire
              </h2>
              <button onClick={() => setOpen(false)}>
                <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Step Info */}
            <div className="px-6 py-4 border-b">
              <p className="text-sm font-medium text-gray-700">
                Step {currentStep} of {totalSteps}:{" "}
                <span className="font-semibold">{getStepTitle()}</span>
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div
                  className="bg-[#224488] h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-4 flex-1 space-y-4">{renderStep()}</div>

            {/* Footer */}
            <div className="flex justify-between border-t px-6 py-4 sticky bottom-0 bg-white">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100 flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </button>
              ) : (
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-5 py-2 text-sm rounded-lg bg-[#224488] text-white hover:bg-[#1a3466] transition flex items-center gap-1"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition flex items-center gap-1"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
