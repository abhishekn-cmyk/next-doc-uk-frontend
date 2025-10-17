import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useExams } from "@/hooks/useExam";
import { Badge } from "../ui/badge";

interface ProductType {
  _id: string;
  href: string;
  title: string;
  subtitle: string;
  steps: string[];
  stepColors: string[];
  tag: string;
  tagColor: string;
  badge: string;
  badgeColor: string;
  price?: number;
}

// Generate proper exam slug
const getExamSlug = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("mrcp")) return "mrcp";
  if (lower.includes("plab")) return "plab";
  if (lower.includes("mrcog")) return "mrcog";
  if (lower.includes("mrcs")) return "mrcs";
  if (lower.includes("ielts") || lower.includes("oet")) return "ielts-oet";
  if (lower.includes("uk")) return "get-started";
  return lower.replace(/\s+/g, "-");
};

export default function Gapmap() {
  const [cards, setCards] = useState<ProductType[]>([]);
  const { data: examsData } = useExams();
  const navigate = useNavigate();
  const getExamType = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("mrcp")) return "MRCP";
  if (lower.includes("plab")) return "PLAB";
  if (lower.includes("mrcog")) return "MRCOG";
  if (lower.includes("mrpch")) return "MRPCH";
  if (lower.includes("mrcs")) return "MRCS";
  if (lower.includes("uk")) return "UK";
  return "default";
};

  useEffect(() => {
    if (examsData) {
      const sortedExams = examsData
        .sort((a, _) => (a.category === "PLAB" ? -1 : 1))
        .slice(0, 6);

      const mappedCards = sortedExams.map((exam) => ({
        _id: exam._id,
        href: `/exams/${getExamSlug(exam.title)}`,
        title: exam.title,
        subtitle: exam.subtitle || "",
        steps: exam.features.length ? exam.features : ["Feature list coming soon"],
        stepColors: exam.features.map(() => "green"),
        tag: exam.category,
        tagColor: exam.category || "gray",
        badge: exam.subcategory || "Core",
        badgeColor: exam.subcategory || "gray",
        price: exam.price,
      }));

      setCards(mappedCards);
    }
  }, [examsData]);

  // --- Color Themes ---
  // --- Color Themes ---
const tagColorClasses: Record<string, string> = {
  UK: "text-red-700 border border-red-700",
  MRCS: "text-red-700 border border-red-700",
  MRCP: "text-orange-700 border border-orange-700",
  MRCOG: "text-blue-700 border border-blue-700",
  MRPCH: "text-blue-700 border border-blue-700",
  PLAB: "text-primary/80 border border-primary/80",
  default: "text-gray-700 border border-gray-700",
};


  

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center my-4">
          <Badge className="text-center bg-indigo-100 text-indigo-700">
            GapMap™ – AI Powered • Mentor Reviewed Products
          </Badge>
        </div>

        {/* Title + Description */}
        <div className="w-full flex flex-col items-center text-center px-4 pb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Map Your NHS Journey — For Every Pathway
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
            Visualize milestones, flag gaps, and integrate CPD/mentor tools at every step.
            Choose your pathway and get a personalized roadmap to NHS success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cards.map((card, idx) => (
  <div
    key={card._id}
    onClick={() => navigate(card.href)}
    className="relative bg-white border-2 rounded-xl shadow-sm p-6 flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
  >
   
   <div className="flex items-center justify-between mb-4">
  {/* Tag badge */}
 <span
  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
    tagColorClasses[getExamType(card.title)] || tagColorClasses.default
  }`}
>
  {card.title.split(" ")[0]}
</span>




  {/* Subcategory / Badge */}
 <span
  className={`text-center px-2 py-1 text-sm ${
    idx === 0
      ? "bg-red-400 text-white rounded-full" // pill-shaped
      : "text-red-600 rounded-md" // normal small rounding
  }`}
>
  {card.badge}
</span>

</div>


    {/* Title + Subtitle */}
    <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>
    <p className="text-sm text-gray-600 mb-4">{card.subtitle}</p>

    {/* Steps */}
    <ul className="text-sm space-y-1 mb-6">
      {card.steps.map((step, idx) => (
        <li
          key={idx}
          className={
            card.stepColors[idx] === "green"
              ? "text-green-600"
              : "text-gray-500"
          }
        >
          ● {step}
        </li>
      ))}
    </ul>

    {/* Price */}
    <div className="mt-auto flex items-center justify-between mb-3">
      <span className="text-sm text-gray-700">
        From <span className="font-semibold">£{card.price ?? "TBA"}</span>
      </span>
    </div>

    {/* Button */}
    <span className="mt-3 w-full inline-block text-center bg-blue-900 text-white font-medium py-2.5 rounded-md hover:bg-blue-800 transition">
      Start {card.title.split(" ")[0]} Journey →
    </span>
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
}
