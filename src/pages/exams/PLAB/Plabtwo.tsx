import { CheckCircle2, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Plabtwo() {
  const navigate = useNavigate();
  const features = [
    "Consultation frameworks (SBAR, Calgary-Cambridge)",
    "Station templates, scripts, and rubrics",
    "Marking checklists and common pitfalls",
    "MentorConnect™ mock circuits (coming soon)"
  ];
 const handleLoginClick = () => {
    navigate("/login?next=/dashboard/resources/plab2");
  };
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-xl">

        {/* Header */}
        <h2 className="text-3xl font-bold text-black mb-4 text-center">
          PLAB-2 OSCE Study Resource Pack
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Structured OSCE preparation tools designed by NHS clinicians — from communication checklists to station frameworks.
        </p>

        {/* Feature List Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Includes</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text- bg-gradient-to-br from-primary to-primary/80 bg-clip-text mt-1 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gradient Download Button */}
        <div className="flex justify-center">
  <button
    onClick={handleLoginClick}
    className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary/80 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
  >
    <Download className="w-5 h-5" />
    Login to Download PLAB-2 Pack
  </button>
</div>

      </div>
    </div>
  );
}
