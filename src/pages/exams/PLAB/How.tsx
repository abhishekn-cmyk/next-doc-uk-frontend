import { Target, Maximize, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const howSteps = [
  { icon: Target, number: "1", title: "Baseline Diagnostic", description: "Start with a quick adaptive test." },
  { icon: Maximize, number: "2", title: "Targeted Practice", description: "Improve using Focus 50™ and topic-based sets." },
  { icon: Clock, number: "3", title: "Mock & Review", description: "Timed mocks, error analysis, AI feedback." },
  { icon: Users, number: "4", title: "Mentor Review (Optional, Chargeable)", description: "Book a mentor to analyse your performance dashboard." },
];

const How = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login?next=/dashboard/plab-qbank");
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">How It Works</h2>
        <p className="text-base sm:text-lg text-gray-600">Four simple steps to PLAB success</p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {howSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 p-5 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon with gradient color, circle stays light gray */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-3">
                <Icon className="w-6 h-6 text-bg-gradient-to-br from-primary to-primary/80 bg-clip-text bg-gradient-to-br from-primary to-primary/80" />
              </div>

              {/* Number and Title on the same line */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-sm">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Login Button */}
      <div className="mt-10 text-center">
        <Button
          className="bg-gradient-to-br from-primary to-primary/80 text-white font-semibold px-6 py-2 shadow-lg hover:opacity-90 transition duration-300"
          onClick={handleLogin}
        >
          Login to Begin
        </Button>
      </div>
    </div>
  );
};

export default How;
