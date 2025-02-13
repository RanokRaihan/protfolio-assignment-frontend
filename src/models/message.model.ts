import { IMessage } from "@/types";
import { Schema, model, models } from "mongoose";

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Message = models.Message || model<IMessage>("Message", messageSchema);

export default Message;
