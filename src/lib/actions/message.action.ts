"use server";

import Message from "@/models/message.model";
import { IMessage } from "@/types";
import { connectDB } from "../connectDB";
import { parseStringify } from "../utils";

export const sendMessage = async (data: IMessage) => {
  try {
    await connectDB();
    const response = await Message.create(data);
    return { data: parseStringify(response) };
  } catch (error) {
    return { error };
  }
};

export const getMessages = async () => {
  try {
    await connectDB();
    const response = await Message.find().sort({ createdAt: -1 });
    return { data: parseStringify(response) };
  } catch (error) {
    return { error };
  }
};
