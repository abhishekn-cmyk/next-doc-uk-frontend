import { z } from "zod";

/**
 * Schema for mentor application form
 */
export const mentorApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  expertise: z.string().min(3, "Expertise must be at least 3 characters"),
  bio: z.string().optional(),
});

/**
 * Simple in-memory rate limiter
 *
 * @param limit - Maximum allowed requests in the window
 * @param windowMs - Time window in milliseconds
 * @returns A function that returns `true` if the action is allowed, `false` otherwise
 */
export function createRateLimiter(limit: number, windowMs: number) {
  const timestamps: Record<string, number[]> = {}; // per-user tracking

  return (userId: string) => { // accept userId
    const now = Date.now();
    if (!timestamps[userId]) timestamps[userId] = [];

   
    timestamps[userId] = timestamps[userId].filter((t) => now - t < windowMs);

    if (timestamps[userId].length >= limit) {
      return false; // Too many requests
    }

    timestamps[userId].push(now);
    return true; // Allowed
  };
}

