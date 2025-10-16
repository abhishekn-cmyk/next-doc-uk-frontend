import { Badge } from "../ui/badge";


interface Step {
  label: string;
  color: string;
}

interface PathwayCardProps {
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string; // Tailwind class like "text-blue-500 bg-blue-50"
  highlight: string;
  steps: Step[];
  price: number;
  startLabel: string;
}

function PathwayCard({
  title,
  subtitle,
  tag,
  tagColor,
  highlight,
  steps,
  price,
  startLabel,
}: PathwayCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition">
      {/* Top row with tag + highlight */}
      <Badge>
        GapMap™ - AI Powered - Mentor Reviewed Products
      </Badge>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-semibold ${tagColor} px-2 py-0.5 rounded-full`}>
          {tag}
        </span>
        <span className="text-xs font-medium text-green-600">{highlight}</span>
      </div>

      {/* Title + Subtitle */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

      {/* Steps */}
      <ul className="text-sm space-y-1 mb-6">
        {steps.map((step, idx) => (
          <li key={idx} className={step.color}>
            ● {step.label}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto">
        <p className="text-sm text-gray-700 mb-3">
          From <span className="font-semibold">£{price}</span>
        </p>
        <button
          type="button"
          className="w-full bg-blue-900 text-white font-medium py-2.5 rounded-md hover:bg-blue-800 transition"
        >
          {startLabel} →
        </button>
        <button
          type="button"
          className="w-full mt-2 border border-gray-300 py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition"
        >
          ⚡ Buy Now – £{price}
        </button>
      </div>
    </div>
  );
}

export default PathwayCard;
