"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { sendMessage } from "@/lib/actions/message.action";
import messageValidationSchema from "@/schemas/message.validation";
import { FormFieldType } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField from "../ui/CustomFormField";
import SubmitButton from "../ui/SubmitButton";

export default function Contactform() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof messageValidationSchema>>({
    resolver: zodResolver(messageValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof messageValidationSchema>) {
    setIsLoading(true);
    try {
      const res = await sendMessage(data);
      if (res.error) {
        throw res.error;
      }
      if (res?.data?._id) {
        form.reset();
        toast.success("Message sent successfully.");
        setIsLoading(false);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setIsLoading(false);
      const error = err as Error;
      toast.error(error.message || "Failed to send message.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your full name"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          type="email"
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email address"
        />
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          label="Message"
          placeholder="Enter your message"
        />
        <SubmitButton className="w-full" isLoading={isLoading}>
          Send
        </SubmitButton>
      </form>
    </Form>
  );
}
