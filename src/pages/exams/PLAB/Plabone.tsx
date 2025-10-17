import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Plabone() {
  const features = [
    { text: "Layered explanations (concept → distractors → clinical pearl)" },
    { text: "NextDoc AI-powered clarifications and mnemonics" },
    { text: "Adaptive analytics and Focus 50™ weak-topic drills" },
    { text: "Progress tracking with performance summaries" },
    { text: "Optional paid mentor analytics review for deeper insights" },
    { text: "Real exam-mode with flag & review system" },
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* === Free Access Badge === */}
        <div className="text-center mb-10">
          <Badge
            className="bg-gradient-to-br from-primary to-primary/80 text-white text-[15px] font-light px-3 py-0.5  tracking-wider transition-colors duration-200"
            style={{ borderRadius: "8px" }}
          >
            Free for First 1000 Users
          </Badge>
        </div>

        {/* === Header Section === */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-6 tracking-tight">
            PLAB-1 Question Bank
          </h1>
          <p className="text-base text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
            The most comprehensive PLAB-1 preparation platform for international doctors. 
            Each question includes detailed explanations, NHS-aligned reasoning, and real clinical pearls.
          </p>
        </div>

        {/* === Features Section (No Cards) === */}
        <div className="mb-6 border border-gray-200 p-6 rounded-lg">
  <h3 className="text-3xl font-bold text-black mb-6 text-left">
    Feature Highlights
  </h3>

  {/* Feature List: No card background */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {features.map((feature, index) => (
      <div key={index} className="flex items-start gap-3">
        <CheckCircle2 className="w-6 h-6 text-bg-gradient-to-br from-primary to-primary/80 bg-clip-text  mt-1" />
        <span className="text-gray-800 text-base font-medium leading-relaxed">
          {feature.text}
        </span>
      </div>
    ))}
  </div>
</div>


        {/* === CTA Section === */}
        <div className="text-center">
          <Button
            className="bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-lg py-3 px-10 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Login to Access PLAB QBank
          </Button>
        </div>
      </div>
    </div>
  );
}
