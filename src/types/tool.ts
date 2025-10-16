// src/types/tool.ts
export interface ITool {
  _id: string;
  name: string;
  tagline?: string;
  description: string;
  features: string[];
  basePrice: number;
  pricingOptions?: {
    label: string;
    price: number;
  }[];
  category?: string;
  actions?: {
    label: string;
    type: "link" | "button";
    url?: string;
    icon?: string; // 👈 new for action icons
  }[];
  image?: string;
  icon?: string; // 👈 new for card header icon
  createdAt?: Date;
  updatedAt?: Date;
}


