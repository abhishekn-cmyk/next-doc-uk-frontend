// components/mentor/MentorInfoModal.tsx
import React, { useEffect } from "react";
import { X, Users, Calendar, Star, Award, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MentorInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const MentorInfoModal: React.FC<MentorInfoModalProps> = ({ isOpen, onClose, onApply }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const benefits = [
    { icon: <Award className="h-6 w-6" />, title: "Professional Growth", description: "Build leadership and teaching experience that strengthens your clinical and managerial profile." },
    { icon: <Users className="h-6 w-6" />, title: "Impact", description: "Empower aspiring doctors to succeed in the NHS by sharing your insights and practical guidance." },
    { icon: <Calendar className="h-6 w-6" />, title: "Flexible Commitment", description: "Conduct sessions that fit your schedule – monthly, quarterly, or ad hoc." },
    { icon: <Star className="h-6 w-6" />, title: "Recognition", description: "Receive acknowledgment within the NextDoc Mentor Network and opportunities for collaboration on CPD-accredited teaching and research." },
    { icon: <Users className="h-6 w-6" />, title: "Community", description: "Join a supportive network of NHS mentors committed to shaping a globally competent, compassionate workforce." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Dashboard & Analytics", description: "Access your personalized mentor dashboard with real-time analytics tracking sessions, earnings, referrals, and mentee progress." },
  ];

  const badgeLevels = [
    {
      icon: "🩵",
      level: "Associate Mentor",
      color: "text-cyan-400",
      requirements: [
        "Early-Career NHS Professional",
        "NHS doctor or PLAB-qualified IMG with at least one year of UK clinical experience",
        "Verified medical registration and current NHS employment",
        "Demonstrates commitment to guiding early-career colleagues and fostering professional development",
        "Focuses on peer support, exam preparation, and adaptation to NHS practice",
      ],
    },
    {
      icon: "💙",
      level: "Senior Mentor",
      color: "text-blue-500",
      requirements: [
        "Experienced NHS Clinician",
        "Minimum three years of NHS experience (Registrar or Specialty Doctor level and above)",
        "Proven contribution to professional training, supervision, or mentorship",
        "Consistently positive feedback from mentees or colleagues",
        "Recognised for collaboration, professionalism, and support of international and UK graduates",
      ],
    },
    {
      icon: "🟡",
      level: "Principal Mentor",
      color: "text-yellow-500",
      requirements: [
        "Consultant-Level or Senior Clinical Leader",
        "Typically eight or more years of NHS experience at Consultant, Clinical Director, or equivalent senior role",
        "Provides strategic guidance in clinical career progression, leadership, and wellbeing",
        "Actively promotes inclusion, reflective practice, and career excellence",
        "Serves as a role model and advocate for professional growth within the healthcare system",
      ],
    },
  ];

  const eligibility = [
    "Current or former NHS clinicians (FY2 and above) with valid GMC registration",
    "Demonstrated interest in mentoring, training, or professional development",
    "Commitment to ethical, inclusive, and supportive teaching practices",
  ];

  const processSteps = [
    { step: "1", title: "Apply through our Mentor Onboarding Form", description: "Complete our comprehensive application form" },
    { step: "2", title: "Background Review", description: "Our team reviews your background and aligns your mentoring preferences" },
    { step: "3", title: "Start Mentoring", description: "Begin mentoring sessions through the secure NextDoc UK platform" },
    { step: "4", title: "Track Progress", description: "Track mentee feedback and earn badge upgrades as you grow your mentoring impact" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-gray-900 max-w-[85%]">
              Why Become a Mentor at NextDoc UK
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-10 w-10 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Mentoring is a rewarding opportunity to share your NHS experience, develop leadership skills, and contribute to the professional growth of the next generation of doctors.
          </p>
        </div>

        <div className="p-6 space-y-8">
          {/* Benefits */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="border border-gray-200 hover:border-blue-300 transition">
                  <CardContent className="p-4 flex space-x-3 items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100">
                      <div className="text-blue-600">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Badge Levels */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Mentor Badges</h3>
            <div className="space-y-4">
              {badgeLevels.map((badge, idx) => (
                <Card key={idx} className="border border-gray-200">
                  <CardContent className="p-5 flex space-x-4 items-start">
                    <div className="text-3xl">{badge.icon}</div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 ${badge.color}`}>{badge.level}</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        {badge.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm italic text-gray-500 mt-2 bg-gray-50 p-3 rounded-lg">
              <strong>Badge Governance:</strong> Mentor badges recognise NHS experience, verified credentials, and contributions to supporting colleagues. Each badge reflects professional growth — not hierarchy.
            </p>
          </section>

          {/* Process Steps */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, idx) => (
                <Card key={idx} className="text-center border border-gray-200">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">{step.step}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h3>
            <ul className="space-y-2 bg-gray-50 p-5 rounded-lg">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
            <Button size="lg" className="flex-1 px-8" onClick={onApply}>
              Apply to Mentor
            </Button>
            <Button size="lg" variant="outline" className="flex-1 px-8" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
