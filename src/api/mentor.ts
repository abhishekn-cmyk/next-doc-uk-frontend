// src/api/mentorApi.ts
import axios from "axios";
import type { IMentor } from "@/types/mentor";

const API_URL_BASE = `${import.meta.env.VITE_API_BASE_URL}/mentor`;

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET all mentors
export const getMentors = async (): Promise<IMentor[]> => {
  try {
    const { data } = await axios.get(API_URL_BASE, {
      headers: getAuthHeaders(),
    });
    return data?.data || [];
  } catch (err: any) {
    console.error("❌ getMentors error:", err.response?.data || err.message);
    return [];
  }
};

// GET single mentor by id
export const getMentorById = async (id: string): Promise<IMentor | null> => {
  try {
    const { data } = await axios.get(`${API_URL_BASE}/${id}`, {
      headers: getAuthHeaders(),
    });
    return data?.data || null;
  } catch (err: any) {
    console.error("❌ getMentorById error:", err.response?.data || err.message);
    return null;
  }
};

// Create mentor application
export const createMentorApplication = async (formData: any) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/mentor-application`,
      formData,
      { headers: getAuthHeaders() }
    );
    return res.data;
  } catch (err: any) {
    console.error(
      "❌ createMentorApplication error:",
      err.response?.data || err.message
    );
    throw err;
  }
};
