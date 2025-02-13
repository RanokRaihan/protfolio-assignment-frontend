"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { updateBlog } from "@/lib/actions/blog.action";
import { blogUpdateschema } from "@/schemas/blog.validation";
import { FormFieldType, IBlogPost } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField from "../ui/CustomFormField";
import SubmitButton from "../ui/SubmitButton";

export default function UpdateBlogForm({
  initialValue,
  blogId,
}: {
  initialValue: Partial<IBlogPost>;
  blogId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof blogUpdateschema>>({
    resolver: zodResolver(blogUpdateschema),
    defaultValues: {
      ...initialValue,
    },
  });

  async function onSubmit(values: z.infer<typeof blogUpdateschema>) {
    setIsLoading(true);
    try {
      const response = await updateBlog(blogId, values);
      if (response.error) {
        throw response.error;
      }
      if (!response?.data?._id) {
        throw new Error("Failed to update blog");
      }
      console.log(response.data);

      setIsLoading(false);
      router.push("/admin/blogs");
      toast.success("Blog update successfully");
    } catch (err) {
      setIsLoading(false);
      const error = err as Error;
      toast.error(error.message || "failed to update blog");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          type="text"
          name="title"
          label="Blog Title"
          placeholder="Enter blog title"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          type="text"
          control={form.control}
          name="author"
          label="Author"
          placeholder="Enter author name"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="category"
          label="Category"
          placeholder="Enter category"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          type="text"
          name="readTime"
          label="Read Time"
          placeholder="ex: 5 min"
        />
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="content"
          label="Content"
          placeholder="Enter content"
        />

        <SubmitButton isLoading={isLoading}>Publish Blog</SubmitButton>
      </form>
    </Form>
  );
}
