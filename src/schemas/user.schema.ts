import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required").max(80, "Name should be less than 50 character"),
  username: z.string().min(1, "Username is required").max(50, "Username should be less than 50 character"),
  bio: z.string().min(30, "Bio should be at least 30 character").max(100, "Bio should be less than 100 character"),
  profilePicture: z.string().url("Invalid URL"),
});