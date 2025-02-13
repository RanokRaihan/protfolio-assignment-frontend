import { z } from "zod";
const MAX_FILE_SIZE = 1.5 * 1024 * 1024; //1.5mb
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const projectValidationSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(2, "title length must be at least 2"),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description length must be at least 10"),
  liveLink: z.string().url("Must be a valid URL"),
  codeLink: z.string().optional(),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 1.5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  technologies: z
    .string({
      required_error: "Technologies is required",
      message: "Technologies must be a string",
    })
    .min(2, "Technologies length must be at least 2"),
});
export const projectUpdateSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(2, "title length must be at least 2")
    .optional(),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description length must be at least 10")
    .optional(),
  liveLink: z.string().url("Must be a valid URL").optional(),
  codeLink: z.string().optional(),
  technologies: z
    .string({
      required_error: "Technologies is required",
      message: "Technologies must be a string",
    })
    .min(2, "Technologies length must be at least 2")
    .optional(),
});

export default projectValidationSchema;
