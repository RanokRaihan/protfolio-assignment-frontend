import { IProject } from "@/types";
import mongoose, { Schema } from "mongoose";

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    liveLink: { type: String, required: true },
    codeLink: { type: String },
    technologies: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
