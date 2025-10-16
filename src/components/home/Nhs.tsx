// src/components/Nhs.jsx
import { Users, Shield, Star, CheckCircle, Trophy } from "lucide-react";

export default function Nhs() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#224488] mb-4">
          Built for NHS Success
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16">
          NextDoc Platform – Fully Functional: Integrated career, exam, and mentorship tools now available
        </p>

        {/* Top Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Star, title: "Dashboards", text: "Mentor & User" },
            { icon: Trophy, title: "NHS", text: "Aligned Pathways" },
            { icon: Users, title: "AI + Mentor", text: "Hybrid Model" },
            { icon: CheckCircle, title: "Global", text: "Access & Standards" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm 
                         hover:shadow-md hover:border-[#224488] transition-all duration-300 
                         flex flex-col items-center justify-between h-44"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-[#224488]" />
              </div>
              <h3 className="text-lg font-bold text-[#224488] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Trophy,
              title: "NextDoc Platform – Fully Functional",
              text: "Integrated career, exam, and mentorship tools now available",
              badge: "Live",
            },
            {
              icon: Users,
              title: "Mentor Network – Active & Growing",
              text: "Connect with NHS consultants and peers worldwide",
              badge: "Active",
            },
            {
              icon: Shield,
              title: "Evidence-Based Learning – Verified",
              text: "Every module developed and reviewed by practising NHS doctors",
              badge: "Verified",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm 
                         hover:shadow-md hover:border-[#224488] transition-all duration-300 
                         flex flex-col justify-between h-60"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#224488]" />
                </div>
                <h3 className="text-lg font-semibold text-[#224488] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.text}</p>
              </div>
              <div
                className="mx-auto mt-2 inline-flex items-center justify-center 
                              border border-gray-300 text-[#224488] text-xs font-semibold 
                              px-4 py-1.5 rounded-lg bg-white shadow-sm"
              >
                {item.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            "NHS Aligned",
            "GDPR Compliant",
            "ICO Registered",
            "Coming Soon - Reviews",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50"
            >
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
