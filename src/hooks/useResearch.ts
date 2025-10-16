// hooks/useResearch.ts
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/research";
import  type { IResearchPublication, IResearchFocusArea, IResearchPartnership, IResearchParticipation, IResearchProposal } from "@/types/research";

export const useProposals = () =>
  useQuery<IResearchProposal[], Error>({
    queryKey: ["proposals"],
    queryFn: api.getProposals,
  });

  export const usePublications = () =>
  useQuery<IResearchPublication[], Error>({
    queryKey: ["publications"],
    queryFn: api.getPublications,
  });

export const useFocusAreas = () =>
  useQuery<IResearchFocusArea[], Error>({
    queryKey: ["focusAreas"],
    queryFn: api.getFocusAreas,
  });

export const usePartnerships = () =>
  useQuery<IResearchPartnership[], Error>({
    queryKey: ["partnerships"],
    queryFn: api.getPartnerships,
  });

export const useParticipations = () =>
  useQuery<IResearchParticipation[], Error>({
    queryKey: ["participations"],
    queryFn: api.getParticipations,
  });
