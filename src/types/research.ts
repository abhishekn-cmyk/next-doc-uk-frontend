// types/research.ts
export interface IResearchPublication {
  _id: string;
  title: string;
  authors: string[];
  date: string;
  summary: string;
  category: string;
  featured:boolean;
   downloadCount?: number; // <-- add this
}

export interface IResearchFocusArea {
  _id: string;
  title: string;
  description: string;
}

export interface IResearchPartnership {
  _id: string;
  partnerName: string;
  description: string;
  startDate: string;
}

export interface IResearchParticipation {
  _id: string;
  userId: string;
  researchTitle: string;
  status: "pending" | "approved" | "rejected";
}

export interface IResearchProposal {
  _id: string;
  userId: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected";
}
