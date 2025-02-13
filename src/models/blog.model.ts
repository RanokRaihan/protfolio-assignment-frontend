import { IBlogPost } from "@/types";
import { Schema, model, models } from "mongoose";

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    readTime: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = models.Blog || model<IBlogPost>("Blog", BlogPostSchema);

export default Blog;
