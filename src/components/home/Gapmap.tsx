import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useExams } from "@/hooks/useExam"; // your hook
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

// Helper to generate proper exam slugs
const getExamSlug = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("mrcp")) return "mrcp";
  if (lower.includes("plab")) return "plab";
  if (lower.includes("mrcog")) return "mrcog";
  if (lower.includes("mrcs")) return "mrcs";
  if (lower.includes("ielts") || lower.includes("oet")) return "ielts-oet";
  if (lower.includes("uk")) return "get-started"; // UK pathway
  // fallback for other exams
  return lower.replace(/\s+/g, "-");
};


export default function Gapmap() {
  const [cards, setCards] = useState<ProductType[]>([]);
  const { data: examsData } = useExams();
  const navigate = useNavigate();

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
        steps: exam.features.length
          ? exam.features
          : ["Feature list coming soon"],
        stepColors: exam.features.map(() => "green"),
        tag: exam.category,
        tagColor:
          exam.category === "PLAB"
            ? "blue"
            : exam.category === "Postgraduate"
            ? "orange"
            : "green",
        badge: exam.subcategory || "Core",
        badgeColor:
          exam.subcategory === "QBank"
            ? "red"
            : exam.subcategory === "PLAB"
            ? "blue"
            : "green",
        price: exam.price,
      }));

      setCards(mappedCards);
    }
  }, [examsData]);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center my-4">
          <Badge className="text-center">
            GapMap™ - AI Powered - Mentor Reviewed Products
          </Badge>
        </div>

        <div className="w-full flex flex-col items-center text-center px-4 pb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Map Your NHS Journey—For Every Pathway
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
            Visualize milestones, flag gaps, and integrate CPD/mentor tools at
            every step. Choose your pathway and get a personalized roadmap to
            NHS success.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={card._id}
                onClick={() => navigate(card.href)}
                className="relative bg-white border-2 rounded-xl shadow-sm p-6 flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Premium badge */}
                {["surgical", "obgyn", "paedtrics", "uk"].some((p) =>
                  card.title.toLowerCase().includes(p)
                ) && (
                  <span
                    className={`absolute top-4 right-4 px-2 py-1 rounded-md font-semibold text-sm ${
                      idx === 0 ? "bg-green-600 text-white" : "text-red-600"
                    }`}
                  >
                    Premium
                  </span>
                )}

                {/* Top Tags */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold text-${card.tagColor}-600 bg-${card.tagColor}-50 px-2 py-0.5 rounded-full`}
                  >
                    {card.tag}
                  </span>
                  <span
                    className={`text-xs border px-2 py-0.5 rounded-full ${
                      card.badgeColor === "red"
                        ? "border-red-500 text-red-600 bg-red-50"
                        : "border-blue-500 text-blue-600 bg-blue-50"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
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
                          : card.stepColors[idx] === "orange"
                          ? "text-orange-500"
                          : card.stepColors[idx] === "red"
                          ? "text-red-500"
                          : "text-gray-400"
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
