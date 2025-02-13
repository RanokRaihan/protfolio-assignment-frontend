"use server";

import Blog from "@/models/blog.model";
import { IBlogPost } from "@/types";
import { revalidatePath } from "next/cache";
import { connectDB } from "../connectDB";
import { parseStringify } from "../utils";

export const addBlog = async (data: IBlogPost) => {
  try {
    await connectDB();
    const response = await Blog.create(data);
    console.log({ response });
    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const getBlogs = async () => {
  try {
    await connectDB();
    const response = await Blog.find().sort({ createdAt: -1 });
    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const getBlogById = async (id: string) => {
  try {
    await connectDB();
    const response = await Blog.findById(id);
    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const updateBlog = async (id: string, data: Partial<IBlogPost>) => {
  try {
    await connectDB();
    const response = await Blog.findByIdAndUpdate(id, data, { new: true });
    revalidatePath("/admin/blogs");
    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const deleteBlog = async (id: string) => {
  try {
    await connectDB();
    const response = await Blog.findByIdAndDelete(id);
    revalidatePath("/admin/blogs");
    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
