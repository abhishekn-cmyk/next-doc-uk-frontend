// types/consent.ts
export interface ConsentSection {
  heading: string;
  content: string;
}

export interface ConsentPolicy {
  version: string;
  title: string;
  description: string;
  sections: ConsentSection[];
}
// types/consent.ts
// types/consent.ts
export interface ConsentLocation {
  city?: string;
  region?: string;
  country?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
}

export interface Consent {
  _id?: string;
  userId?: string;
  ipAddress: string;
  userAgent?: string;
  choice: "accept_all" | "essential_only" | "decline";
  policy: ConsentPolicy;
  location?: ConsentLocation;  // ✅ added
  createdAt?: string;
  updatedAt?: string;
}

export type ConsentChoice = "accept_all" | "essential_only" | "decline";

