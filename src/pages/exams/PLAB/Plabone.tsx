import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Plabone() {
  // Styles for the main button, matching the image's dark blue/indigo
  const primaryBg = "bg-indigo-900"; // Deeper indigo/blue for the button
  const hoverBg = "hover:bg-indigo-800"; // Slightly lighter on hover

  const features = [
    { text: "Layered explanations (concept → distractors → clinical pearl)" },
    { text: "NextDoc AI-powered clarifications and mnemonics" }, // Swapped position to match image layout
    { text: "Adaptive analytics and Focus 50™ weak-topic drills" },
    { text: "Progress tracking with performance summaries" }, // Swapped position to match image layout
    { text: "Optional paid mentor analytics review for deeper insights" },
    { text: "Real exam-mode with flag & review system" },
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* === Free Access Badge (Styled to match image) === */}
        <div className="text-center mb-10">
          <Badge
            // Adjusted styling to match the image's more rounded/pill-like badge
            className="bg-indigo-800 text-white font-medium px-3 py-1 text-xs uppercase tracking-wider transition-colors duration-200"
            style={{ borderRadius: "10px" }} // Added explicit style for a more rounded look
          >
            Free for First 1000 Users
          </Badge>
        </div>

        {/* === Header Section === */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-extrabold text-black mb-6 tracking-tight`}>
            PLAB-1 Question Bank
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
            The most comprehensive <strong className="font-semibold text-black">PLAB-1 preparation platform</strong> for international doctors.
            Each question includes detailed explanations, <strong className="font-semibold text-black">NHS-aligned reasoning</strong>, and <strong className="font-semibold text-black">real clinical pearls</strong>. {/* Corrected description to match image */}
          </p>
        </div>

        {/* === Features Section (Styled to match image) === */}
       <div className="max-w-7xl mx-auto shadow-sm p-10 sm:p-12 mb-6 bg-white rounded-lg">
      <h3 className="text-3xl font-bold text-black mb-8 text-left">
        Feature Highlights
      </h3>

      {/* Feature Grid: Two rectangular cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature,index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-gray-100"
          >
            <span className="text-gray-800 text-base font-medium leading-relaxed">
                <CheckCircle2/>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
<br/><br/>

        {/* === CTA Section (Styled to match image) === */}
        <div className="text-center">
          <Button
            // Adjusted button style: deeper indigo, specific padding, and more subtle rounded corners
            className={`${primaryBg} ${hoverBg} text-white font-bold text-lg py-3 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            style={{ borderRadius: '8px' }} // Ensuring the button corners are squared off like in the image
          >
            Login to Access PLAB QBank {/* Corrected button text to match image */}
          </Button>

        </div>
      </div>
    </div>
  );
}