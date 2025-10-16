import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, Brain, BarChart3, Share2, UserCheck } from "lucide-react";
import { type ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  text: string;
  color: "blue" | "gray";
}

export default function WhyChoose() {
  const features: Feature[] = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      text: "Designed by NHS Doctors — grounded in real-world clinical practice and UK guidelines.",
      color: "blue",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      text: "2000+ Clinically Reviewed Questions — extended explanations, distractor analysis, and clinical pearls.",
      color: "blue",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      text: "NextDoc AI Assistant — helps you understand rationales, generate mnemonics, and clarify mistakes.",
      color: "blue",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      text: "Smart Learning Dashboard — adaptive analytics showing accuracy, weak areas, and improvement curves.",
      color: "blue",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      text: "Share Analytics with Mentor (Chargeable Feature) — securely connect with NHS mentors for paid performance review sessions.",
      color: "blue",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      text: "Mentor-Backed Progression — verified NHS consultants available for expert guidance through MentorConnect™.",
      color: "blue",
    },
  ];

  const getColorClasses = (color: Feature["color"]) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-white from-slate-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose NextDoc for PLAB?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures you're fully prepared with AI-powered tools 
            and NHS mentor support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all duration-300 group w-full"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                  {feature.icon}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
