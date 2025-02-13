"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";

import { updateProject } from "@/lib/actions/project.action";
import { projectUpdateSchema } from "@/schemas/project.validation";
import { FormFieldType, IProject } from "@/types";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField from "../ui/CustomFormField";
import SubmitButton from "../ui/SubmitButton";

export default function UpdateProjectForm({
  initialValues,
  projectId,
}: {
  initialValues: Partial<IProject>;
  projectId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // define form.
  const form = useForm<z.infer<typeof projectUpdateSchema>>({
    resolver: zodResolver(projectUpdateSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  // submit handler.
  async function onSubmit(values: z.infer<typeof projectUpdateSchema>) {
    setIsLoading(true);

    try {
      const projectRes = await updateProject(projectId, values);

      if (projectRes.error) {
        throw projectRes.error;
      }
      setIsLoading(false);

      toast.success("Project Updated successfully.");
      router.push("/admin/projects");
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

        <SubmitButton isLoading={isLoading}>update Project</SubmitButton>
      </form>
    </Form>
  );
}
