import { z } from "zod";

const messageValidationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message must be at least 5 characters" }),
});

export default messageValidationSchema;
