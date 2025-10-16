export type ProgramCategory = "CPD" | "Mentorship" | "CPD & Mentorship" | "Bundles & Subscriptions";

export type BillingCycle = "monthly" | "yearly" | "one-time";

export type PricingType = "cpd" | "mentorship" | "bundle" | "subscription";

export interface IPricingOption {
  name: string;
  description?: string;
  price: number;
  currency: string;
  type: PricingType;
  billingCycle?: BillingCycle;
  perSession?: boolean;
  popular?: boolean;
  premium?: boolean;
  bestValue?: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaLink?: string;
  icon?: string;
  trialPeriod?: string;
}

export interface IProgram {
  _id: string;
  category: ProgramCategory;
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  image?: string;
  gallery?: string[];
  pricingOptions: IPricingOption[];
  mentors?: string[]; // or ObjectId[]
  createdAt: string;
  updatedAt: string;
}
