export type ExamCategory = "English Proficiency" | "PLAB" | "Postgraduate";

export type ExamType = "IELTS" | "OET" | "PLAB-1" | "MRCP" | "MRCS" | "MRCOG" | "MRCPCH";

export interface ExamAction {
  label: string;
  type: "enroll" | "download" | "consultation" | "purchase";
  link: string;
}

export interface ExamPricingOption {
  label: string;
  price: number;
}
export interface CartItem {
  id: string;
  name: string;
  price?: number;  // <-- now optional
  description?: string;
  type: "one-time" | "subscription";
}


export interface IExam {
  _id: string;
  category: ExamCategory;
  subcategory?: string;
  title: string;
  titles:string;
  subtitle?: string;
  description: string;
  features: string[];
  includes?: string[];
  mentors?: string[];
  timeline?: {
    phase: string;
    weeks?: string;
    details?: string;
  }[];
  components?: {
    name: string;
    type?: string;
    details: string[];
  }[];
  mentorship?: {
    included: boolean;
    type?: "1:1" | "group" | "principal";
    sessions?: number;
  };
  price?: number;
  currency?: string;
  pricingOptions?: ExamPricingOption[];
  paymentLink?: string;
  examType?: ExamType;
  bundleItems?: string[];
  actions?: ExamAction[];
  startDate?: string;
  endDate?: string;
  duration?: string;
  createdAt: string;
  updatedAt: string;
   icon?: React.ReactElement;     // optional icon component
  iconBg?: string;    
}
