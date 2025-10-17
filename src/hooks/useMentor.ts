import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getMentors,
  getMentorById,
  createMentorApplication,
} from "@/api/mentor";
import type { IMentor } from "@/types/mentor";

export const useMentors = () => {
  return useQuery<IMentor[], Error>({
    queryKey: ["mentors"],
    queryFn: getMentors,
  });
};

export const useMentor = (id: string) => {
  return useQuery<IMentor, Error>({
    queryKey: ["mentor", id],
    queryFn: async () => {
      const mentor = await getMentorById(id);
      if (!mentor) throw new Error("Mentor not found");
      return mentor;
    },
    enabled: !!id,
  });
};


export const useCreateMentorApplication = () => {
  return useMutation({
    mutationFn: createMentorApplication,
  });
};
