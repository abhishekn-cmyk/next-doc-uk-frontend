// api/research.ts
import axios from "axios";
import type {
  IResearchPublication,
  IResearchFocusArea,
  IResearchPartnership,
  IResearchParticipation,
  IResearchProposal,
} from "@/types/research";

// Publications
export const getPublications = async (): Promise<IResearchPublication[]> => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/research/publications`
  );
  return res.data.data;
};

// Focus Areas
// Focus Areas
export const getFocusAreas = async (): Promise<IResearchFocusArea[]> => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/research/focus-areas`
  );
  return res.data.data; // ✅ unwrap "data"
};

// Partnerships
export const getPartnerships = async (): Promise<IResearchPartnership[]> => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/research/partnerships`
  );
  return res.data.data;
};

// Participations
export const getParticipations = async (): Promise<
  IResearchParticipation[]
> => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/research/participations`
  );
  return res.data;
};

// Proposals
export const getProposals = async (): Promise<IResearchProposal[]> => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/research/proposals`
  );
  return res.data;
};
