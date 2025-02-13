"use server";

import Project from "@/models/project.model";
import { IProject } from "@/types";
import { revalidatePath } from "next/cache";
import { connectDB } from "../connectDB";
import { parseStringify } from "../utils";

export const addProject = async (data: IProject) => {
  try {
    await connectDB();
    const response = Project.create(data);

    return { data: parseStringify(response) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
export const getProjectById = async (id: string) => {
  try {
    await connectDB();
    const project = await Project.findById(id);

    if (!project) {
      throw new Error("Project not found");
    }

    return { data: parseStringify(project) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const updateProject = async (id: string, data: Partial<IProject>) => {
  try {
    await connectDB();
    const updatedProject = await Project.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProject) {
      throw new Error("Project not found");
    }
    revalidatePath("/admin/projects");
    return { data: parseStringify(updatedProject) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const getAllProjects = async () => {
  try {
    await connectDB();
    const projects = await Project.find();

    return { data: parseStringify(projects) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const deleteProject = async (id: string) => {
  try {
    await connectDB();
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      throw new Error("Project not found");
    }
    revalidatePath("/admin/projects");
    return { data: parseStringify(deletedProject) };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
