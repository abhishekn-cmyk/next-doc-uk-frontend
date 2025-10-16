import axios from "axios";
import  type { IExam } from "@/types/exam";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/exam`

export const fetchExams = async (): Promise<IExam[]> => {
  const { data } = await axios.get<{ success: boolean; data: IExam[] }>(
    `${BASE_URL}/exams`
  );
  if (!data.success) throw new Error("Failed to fetch exams");
  return data.data;
};

export const createExam = async (exam: Partial<IExam>): Promise<IExam> => {
  const { data } = await axios.post<{ success: boolean; data: IExam }>(
    `${BASE_URL}/exams`,
    exam
  );
  if (!data.success) throw new Error("Failed to create exam");
  return data.data;
};
