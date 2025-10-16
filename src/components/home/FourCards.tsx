import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowRight, Zap, FileText, X } from "lucide-react";
import type { ITool } from "@/types/tool";
import axios from "axios";
import { useTools } from "@/hooks/useTools";

interface CardType {
  image: string;
  badge: { text: string; color: string };
  price: string;
  title: string;
  subtitle: string;
  desc: string;
  feature: { icon: ReactNode; text: string };
  primary: { text: string; href: string };
  secondary: { icon: ReactNode; text: string };
}

export default function FourCards() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CardType | null>(null);

  const { data: tools = [], isLoading, error } = useTools();

  if (isLoading) {
    return <p className="text-center py-10">Loading tools...</p>;
  }
  if (error) {
    return (
      <p className="text-center text-red-500 py-10">Failed to load tools</p>
    );
  }

  const slugify = (str: string) => str.toLowerCase();

  const cards: CardType[] = tools.map((tool: ITool, idx, arr) => ({
    image: `${import.meta.env.VITE_API_BASE_URL}${tool.image}`,
    badge: {
      text: tool.category || "Tool",
      color:
        idx === 1 || idx === arr.length - 2 ? "bg-red-600" : "bg-purple-600",
    },
    price: tool.basePrice ? `£${tool.basePrice}` : "Free",
    title: tool.name,
    subtitle: tool.tagline || "",
    desc: tool.description || "",
    feature: {
      icon: <FileText className="h-4 w-4 text-purple-600" />,
      text: tool.features?.[0] || "",
    },
    primary: {
      text: "Learn More",
      href: `/${slugify(tool.name)}`,
    },

    secondary: {
      icon: <Zap className="h-4 w-4" />,
      text: tool.pricingOptions?.[0]?.label
        ? `${tool.pricingOptions[0].label} - £${tool.pricingOptions[0].price}`
        : "Get Started",
    },
  }));

  const profileStr = localStorage.getItem("user");
  const profile = profileStr ? JSON.parse(profileStr) : null;

  const handleCheckout = async (name: string, price: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payment`,
        {
          items: [{ name: name, price: price.slice(1), quantity: 1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { url } = response.data;

      window.location.replace(url);
    } catch (error: any) {
      console.error("Payment failed:", error);
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:border-purple-500 transition-all overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-4 text-left">
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`text-xs text-white px-2 py-0.5 rounded-full ${card.badge.color}`}
                >
                  {card.badge.text}
                </span>
                <span className="text-sm font-bold text-blue-900">
                  {card.price}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">{card.desc}</p>

              {/* Feature */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                {card.feature.icon}
                <span>{card.feature.text}</span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-2">
                <a
                  href={card.primary.href}
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-900 text-white py-2 text-sm font-medium hover:bg-blue-800 transition"
                >
                  {card.primary.text} <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  onClick={() => {
                    setSelectedProduct(card);
                    setOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 text-sm font-medium hover:border-purple-500 transition"
                >
                  {card.secondary.icon}
                  {card.secondary.text}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore button */}
      <div className="mt-8">
        <a
          href="/products"
          className="px-6 py-3 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-800 transition flex items-center gap-2"
        >
          Explore All Learning Tools <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Modal */}
      {open && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative border">
            <button
              onClick={() => {
                setOpen(false);
                setSelectedProduct(null);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-5 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Quick Checkout
              </h2>
            </div>

            <div className="bg-gray-50 px-5 py-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {selectedProduct.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedProduct.subtitle}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  {selectedProduct.price}
                </p>
                <span className="text-xs text-gray-500 border px-2 py-0.5 rounded-full">
                  One-time
                </span>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                🔒 Secure payment powered by Stripe
              </p>
            </div>

            <div className="flex justify-end gap-3 px-5 py-4 border-t">
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedProduct(null);
                }}
                className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                className="px-5 py-2 text-sm font-medium rounded-md bg-blue-900 text-white hover:bg-blue-800"
                onClick={() =>
                  handleCheckout(selectedProduct?.title, selectedProduct.price)
                }
              >
                Pay {selectedProduct.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
