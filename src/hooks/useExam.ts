import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchExams, createExam } from "@/api/exam";
import type { IExam } from "@/types/exam";

// Fetch exams
export const useExams = () => {
  return useQuery<IExam[], Error>({
    queryKey: ["exams"],
    queryFn: fetchExams,
  });
};

// Create exam + invalidate cache
export const useCreateExam = () => {
  const queryClient = useQueryClient();
  return useMutation<IExam, Error, Partial<IExam>>({
    mutationFn: createExam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};

