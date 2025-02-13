"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";

import { addProject } from "@/lib/actions/project.action";
import projectValidationSchema from "@/schemas/project.validation";
import { FormFieldType } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField from "../ui/CustomFormField";
import FileUploader from "../ui/FileUploader";
import SubmitButton from "../ui/SubmitButton";

const projectDefaultValues = {
  title: "",
  description: "",
  technologies: "",
  liveLink: "",
  codeLink: "",
  image: undefined,
};

export default function ProjectForm() {
  const [isLoading, setIsLoading] = useState(false);
  // define form.
  const form = useForm<z.infer<typeof projectValidationSchema>>({
    resolver: zodResolver(projectValidationSchema),
    defaultValues: {
      ...projectDefaultValues,
    },
  });

  // submit handler.
  async function onSubmit(values: z.infer<typeof projectValidationSchema>) {
    setIsLoading(true);
    const { image, ...data } = values;
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "portfolio");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ranokraihan/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to upload image.");
      }

      const imageRes = await res.json();
      const projectData = {
        ...data,
        image: imageRes.secure_url,
      };

      const projectRes = await addProject(projectData);

      if (projectRes.error) {
        throw projectRes.error;
      }
      setIsLoading(false);
      form.reset();
      toast.success("Project added successfully.");
    } catch (err) {
      setIsLoading(false);
      const error = err as Error;
      toast.error(error.message || "Something went wrong.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-left  lg:px-8 px-2 max-w-[768px]"
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="title"
          label="Project Title"
          placeholder="Blood Donation App"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="description"
          label="Project Description"
          placeholder="This is a project description"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="technologies"
          label="Technology Used"
          placeholder="React, Node.js, MongoDB"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="codeLink"
          label="Code Repository Link"
          placeholder="https:github.com/demo"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="liveLink"
          label="Live Website Link"
          placeholder="https://demo.com"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          name="image"
          label="Upload a Thumbnail"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderSkeleton={(field: any) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />

        <SubmitButton isLoading={isLoading}>Add Project</SubmitButton>
      </form>
    </Form>
  );
}
