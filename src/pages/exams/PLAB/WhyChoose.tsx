import { ShieldCheck, Heart, BookOpen, BarChart3, Share2, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const whyChooseFeatures = [
  { icon: ShieldCheck, text: "Designed by NHS Doctors — grounded in real-world clinical practice and UK guidelines." },
  { icon: Heart, text: "NextDoc AI Assistant — helps you understand rationales, generate mnemonics, and clarify mistakes." },
  { icon: BookOpen, text: "2000+ Clinically Reviewed Questions — extended explanations, distractor analysis, and clinical pearls." },
  { icon: BarChart3, text: "Smart Learning Dashboard — adaptive analytics showing accuracy, weak areas, and improvement curves." },
  { icon: Share2, text: "Share Analytics with Mentor (Chargeable Feature) — securely connect with NHS mentors for paid performance review sessions." },
  { icon: UserCheck, text: "Mentor-Backed Progression — verified NHS consultants available for expert guidance through MentorConnect™." }
];

export default function WhyChooseSection() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center mb-16">
  <h2
    style={{
      fontSize: '2rem',   // Heading size
      fontWeight: 800,       // Extra bold
      lineHeight: 1.2,       // Tight line height
      marginBottom: '1rem',  // Space below heading
      color: '#111827',      // Dark gray
    }}
  >
    Why Choose NextDoc for PLAB?
  </h2>
  <p
    style={{
      fontSize: '1rem',   // Paragraph size
      lineHeight: 1.7,       // Comfortable spacing
      color: '#4B5563',      // Light gray text
      maxWidth: '50ch',      // Limit line length
      margin: '0 auto',      // Center paragraph
    }}
  >
    Our comprehensive approach ensures you're fully prepared with AI-powered tools and NHS mentor support.
  </p>
</div>



     <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {whyChooseFeatures.map((feature, i) => {
    const Icon = feature.icon;
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="group p-6 bg-white hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:shadow-md rounded-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
              <Icon className="w-6 h-6 text-gradient-to-br from-primary to-primary/80" />
            </div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed flex-1">{feature.text}</p>
        </div>
      </motion.div>
    );
  })}
</div>

    </div>
  );
}