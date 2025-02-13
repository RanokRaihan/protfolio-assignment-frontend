"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { addBlog } from "@/lib/actions/blog.action";
import BlogValidationSchema from "@/schemas/blog.validation";
import { FormFieldType } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField from "../ui/CustomFormField";
import FileUploader from "../ui/FileUploader";
import SubmitButton from "../ui/SubmitButton";

const defaultValues = {
  title: "",
  content: "",
  author: "",
  image: undefined,
  readTime: "",
  category: "",
};

export default function WriteBlogForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof BlogValidationSchema>>({
    resolver: zodResolver(BlogValidationSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  async function onSubmit(values: z.infer<typeof BlogValidationSchema>) {
    const { image, ...data } = values;
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "portfolio");
    setIsLoading(true);
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
      const blogData = {
        ...data,
        image: imageRes.secure_url,
      };
      const response = await addBlog(blogData);
      if (response.error) {
        throw response.error;
      }
      if (!response?.data?._id) {
        throw new Error("Failed to write blog");
      }
      console.log(response.data);
      form.reset();
      setIsLoading(false);
      toast.success("Blog published successfully");
    } catch (err) {
      setIsLoading(false);
      const error = err as Error;
      toast.error(error.message || "failed to write blog");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          name="image"
          label="Upload a blog Thumbnail"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderSkeleton={(field: any) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />
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
