// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
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

export default function Gapmap() {
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const [cards, setCards] = useState<ProductType[]>([]);

  const { data: examsData } = useExams(); // fetch exams

  useEffect(() => {
    if (examsData) {
      // Sort PLAB exams first
      const sortedExams = examsData
        .sort((a, _) => (a.category === "PLAB" ? -1 : 1))
        .slice(0, 6);

      const mappedCards = sortedExams.map((exam) => ({
        _id: exam._id,
        href: `/exams/${exam.category.toLowerCase()}`,
        title: exam.title,
        subtitle: exam.subtitle || "",
        steps: exam.features.length
          ? exam.features
          : ["Feature list coming soon"],
        stepColors: exam.features.map(() => "green"), // default green, can customize
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
        <div className="flex justify-center my-4">
  <Badge className="text-center">
    GapMap™ - AI Powered - Mentor Reviewed Products
  </Badge>
</div>

        {/* Heading */}
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

        {/* Pathway Cards */}
        <div className="w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card._id}
                
                // onClick={() => navigate(card.href)}
                className="bg-white border-2 rounded-xl shadow-sm p-6 flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
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

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {card.title}
                </h3>
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

                {/* Price & Badge */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    From{" "}
                    <span className="font-semibold">
                      £{card.price ?? "TBA"}
                    </span>
                  </span>
                  
                </div>

                {/* Buttons */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                     setShowComingSoonModal(true);
                    // navigate(card.href);
                  }}
                  className="mt-3 w-full bg-blue-900 text-white font-medium py-2.5 rounded-md hover:bg-blue-800 transition"
                >
                  Start {card.title.split(" ")[0]} Journey →
                </button>

                {/* Buy Now only if price exists */}
                {card.price && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(card);
                      setShowModal(true);
                    }}
                    className="mt-2 w-full flex items-center justify-center gap-2 border border-blue-900 text-blue-900 font-medium py-2.5 rounded-md hover:bg-blue-50 transition"
                  >
                    <Zap className="w-4 h-4" />
                    Buy Now – £{card.price}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Coming Soon Modal */}
{showComingSoonModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative text-center">
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={() => setShowComingSoonModal(false)}
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">Coming Soon!</h2>
      <p className="text-gray-700 mb-6">
        This feature is under development. Stay tuned for updates!
      </p>
      <button
        onClick={() => setShowComingSoonModal(false)}
        className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* Modal Checkout */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Quick Checkout</h2>

            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-semibold">{selectedProduct.title}</h3>
              <p className="text-sm text-gray-600">
                Complete {selectedProduct.tag} preparation with free quiz bank
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold">
                  £{selectedProduct.price ?? "TBA"}
                </span>
                <span className="text-xs text-gray-500">One-time</span>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800">
                Pay £{selectedProduct.price ?? "TBA"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
