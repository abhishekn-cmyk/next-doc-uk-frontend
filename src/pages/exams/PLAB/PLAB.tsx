import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Download, LogIn } from "lucide-react";
import { ShieldCheck, BookOpen, Brain, BarChart3, Share2, UserCheck } from "lucide-react";
import { Target, Maximize, Clock, Users } from 'lucide-react';
import { CheckCircle2 } from "lucide-react";

export default function PLABHero() {
  const navigate = useNavigate();

  const handleLogin = (next: string) => {
  navigate(`/login?next=${next}`);
};

  // Features for WhyChoose
  const whyChooseFeatures = [
    { icon: <ShieldCheck className="h-6 w-6" />, text: "Designed by NHS Doctors — grounded in real-world clinical practice and UK guidelines." },
    { icon: <BookOpen className="h-6 w-6" />, text: "2000+ Clinically Reviewed Questions — extended explanations, distractor analysis, and clinical pearls." },
    { icon: <Brain className="h-6 w-6" />, text: "NextDoc AI Assistant — helps you understand rationales, generate mnemonics, and clarify mistakes." },
    { icon: <BarChart3 className="h-6 w-6" />, text: "Smart Learning Dashboard — adaptive analytics showing accuracy, weak areas, and improvement curves." },
    { icon: <Share2 className="h-6 w-6" />, text: "Share Analytics with Mentor (Chargeable Feature) — securely connect with NHS mentors for paid performance review sessions." },
    { icon: <UserCheck className="h-6 w-6" />, text: "Mentor-Backed Progression — verified NHS consultants available for expert guidance through MentorConnect™." }
  ];

  const getColorClasses = () => "bg-blue-100 text-blue-600";

  // Steps for How
  const howSteps = [
    { number: 1, title: "Baseline Diagnostic", description: "Start with a quick adaptive test.", icon: Target },
    { number: 2, title: "Targeted Practice", description: "Improve using Focus 50™ and topic-based sets.", icon: Maximize },
    { number: 3, title: "Mock & Review", description: "Timed mocks, error analysis, AI feedback.", icon: Clock },
    { number: 4, title: "Mentor Review", description: "Book a mentor to analyze your performance dashboard.", icon: Users, optional: true },
  ];

  const plabOneFeatures = [
    "Layered explanations (concept → distractors → clinical pearl)",
    "NextDoc AI-powered clarifications and mnemonics",
    "Adaptive analytics and Focus 50™ weak-topic drills",
    "Progress tracking with performance summaries",
    "Optional paid mentor analytics review for deeper insights",
    "Real exam-mode with flag & review system"
  ];

  const plabTwoFeatures = [
    "Consultation frameworks (SBAR, Calgary-Cambridge)",
    "Station templates, scripts, and rubrics",
    "Marking checklists and common pitfalls",
    "MentorConnect™ mock circuits (coming soon)"
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white overflow-hidden px-6 sm:px-12 lg:px-24">
        {/* Floating background icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-32 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <polygon points="12,2 22,22 2,22" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-10">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-left py-20"
        >
          <Badge className="mb-6 bg-white text-[#0A3B7A] font-semibold px-4 py-2 rounded-full shadow-md">
            Built by Doctors. For Doctors. AI-Powered.
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Start Your PLAB Journey with <span className="text-blue-200">NextDoc AI</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-6 leading-relaxed max-w-2xl">
            An AI-powered question bank and mentorship ecosystem built by NHS doctors.
            Experience PLAB-1 and PLAB-2 preparation designed for real NHS success.
          </p>

          <p className="text-base text-blue-200 mb-8 leading-normal max-w-2xl">
            For the first <strong className="font-bold text-white">1000 learners</strong>, full PLAB-1 access is free.
            Mentor analysis and feedback sessions remain paid features.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 font-semibold bg-white text-[#0A3B7A] shadow-md border-none hover:bg-white focus-visible:ring-0"
              onClick={() => handleLogin("/dashboard/resources/plab-qbank")}
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login to Access PLAB QBank
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 border-2 border-white text-white bg-transparent shadow-md hover:bg-transparent focus-visible:ring-0"
              onClick={() => handleLogin("/dashboard/resources/plab2")}
            >
              <Download className="h-5 w-5 mr-2" />
              Login to Download PLAB-2 Pack
            </Button>
          </div>
        </motion.div>
      </div>

      {/* WhyChoose Section */}
      <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose NextDoc for PLAB?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures you're fully prepared with AI-powered tools and NHS mentor support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {whyChooseFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getColorClasses()}`}>
                  {f.icon}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How Section */}
      <div className="font-sans py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">How It Works</h1>
            <p className="text-lg text-gray-500">Four simple steps to PLAB success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4 shadow-md">
                    <StepIcon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2 flex-wrap justify-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-blue-100 text-blue-600 font-bold text-sm">
                      {step.number}
                    </span>
                    <span>{step.title}</span>
                    {step.optional && <span>(Optional, Chargeable)</span>}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-200 text-lg"
              onClick={() => handleLogin("/dashboard")}
            >
              Login to Begin
            </Button>
          </div>
        </div>
      </div>

      {/* PLAB-1 Section */}
      <div className="min-h-screen py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <Badge className="bg-indigo-800 text-white font-medium px-3 py-1 text-xs uppercase tracking-wider mb-4">Free for First 1000 Users</Badge>
          <h1 className="text-5xl font-extrabold text-black mb-6 tracking-tight">PLAB-1 Question Bank</h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
            The most comprehensive <strong className="font-semibold text-black">PLAB-1 preparation platform</strong> for international doctors.
            Each question includes detailed explanations, <strong className="font-semibold text-black">NHS-aligned reasoning</strong>, and <strong className="font-semibold text-black">real clinical pearls</strong>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto shadow-sm p-10 sm:p-12 mb-6 bg-white rounded-lg">
          <h3 className="text-3xl font-bold text-black mb-8 text-left">Feature Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plabOneFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-gray-100">
                <CheckCircle2 className="text-gray-800 mr-2 mt-1" />
                <span className="text-gray-800 text-base font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-lg py-3 px-10 rounded-lg shadow-lg transition-all duration-300"
              onClick={() => handleLogin("/dashboard/resources/plab-qbank")}
            >
              Login to Access PLAB QBank
            </Button>
          </div>
        </div>
      </div>

      {/* PLAB-2 Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-4">PLAB-2 OSCE Study Resource Pack</h2>
          <p className="text-gray-700 mb-8">Structured OSCE preparation tools designed by NHS clinicians — from communication checklists to station frameworks.</p>

          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Includes</h3>
            <ul className="space-y-3">
              {plabTwoFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Button
              className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-800 transition-colors duration-300"
              onClick={() => handleLogin("/dashboard/resources/plab2")}
            >
              Login to Download PLAB-2 Pack
            </Button>
          </div>
        </div>
      </div>

      {/* Early Access Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-gray-50 border border-gray-200 rounded-xl shadow-md text-center">
          <span className="inline-block text-indigo text-sm font-semibold px-3 py-1 rounded-full shadow-sm mb-4">🎉 Early Access Offer</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Period - First 1000 Users Only</h3>
          <p className="text-gray-700 mb-6">For a limited period, the first 1000 users will enjoy full PLAB-1 access for free. Mentor analysis and feedback features remain part of the paid plans.</p>
          <Button
            className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-800 transition-colors duration-300"
            onClick={() => handleLogin("/dashboard/resources/plab-qbank")}
          >
            Join Early Access Login
          </Button>
        </div>
      </div>

      {/* Footer */}
    {/* Footer */}
<footer className="bg-gray-100 text-black py-10 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
    {/* Disclaimer */}
    <p className="text-sm text-gray-700 text-center max-w-3xl">
      PLAB is a GMC examination. NextDoc UK is an independent educational platform offering AI-powered learning tools for IMGs. We make no pass-rate or placement claims. Mentor analysis is a paid feature.
    </p>

    {/* Social Links below */}
    <div className="flex items-center gap-6 mt-2">
      <a
        href="https://instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition-colors"
      >
        <span className="text-xl">📸</span>
        <span className="text-sm">Instagram</span>
      </a>
      <a
        href="https://t.me/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-400 transition-colors"
      >
        <span className="text-xl">✈️</span>
        <span className="text-sm">Telegram</span>
      </a>
    </div>
  </div>
</footer>





    </div>
  );
}
