import { z } from "zod";
const MAX_FILE_SIZE = 1.5 * 1024 * 1024; //1.5mb
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const BlogValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
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
  readTime: z.string().min(1, "Read time is required"),
  category: z.string().min(1, "Category is required"),
});
export const blogUpdateschema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  content: z.string().min(1, "Content is required").optional(),
  author: z.string().min(1, "Author is required").optional(),
  readTime: z.string().min(1, "Read time is required").optional(),
  category: z.string().min(1, "Category is required").optional(),
});

export default BlogValidationSchema;
