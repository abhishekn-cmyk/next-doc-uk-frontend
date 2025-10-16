// src/api/mentorApi.ts
import axios from "axios";
import type { IMentor } from "@/types/mentor";
import axiosInstance from "@/lib/axiosInstance";

const API_URL_BASE = `${import.meta.env.VITE_API_BASE_URL}/mentor`;


// GET all mentors
export const getMentors = async (): Promise<IMentor[]> => {
  const { data } = await axios.get(API_URL_BASE);
  return data?.data || [];
};

// GET single mentor by id
export const getMentorById = async (id: string): Promise<IMentor> => {
  const { data } = await axios.get(`${API_URL_BASE}/${id}`);
  return data?.data;
};

// Create mentor application
export const createMentorApplication = async (formData: any) => {
  const res = await axiosInstance.post("mentor-application", formData);

  return res.data;
};
