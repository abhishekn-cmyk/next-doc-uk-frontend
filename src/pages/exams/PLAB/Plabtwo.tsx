import { CheckCircle2 } from "lucide-react";

export default function Plabtwo() {
  const features = [
    "Consultation frameworks (SBAR, Calgary-Cambridge)",
    "Station templates, scripts, and rubrics",
    "Marking checklists and common pitfalls",
    "MentorConnect™ mock circuits (coming soon)"
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-xl">
        <h2 className="text-3xl font-bold text-black mb-4">
          PLAB-2 OSCE Study Resource Pack
        </h2>
        <p className="text-gray-700 mb-8">
          Structured OSCE preparation tools designed by NHS clinicians — from communication checklists to station frameworks.
        </p>

        {/* Single rectangular card with all points */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Includes</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Download button */}
        <div className="text-center">
          <button className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-800 transition-colors duration-300">
            Login to Download PLAB-2 Pack
          </button>
        </div>
      </div>
    </div>
  );
}
