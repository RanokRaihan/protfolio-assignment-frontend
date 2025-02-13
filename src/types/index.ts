export interface IProject {
  _id?: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  codeLink?: string;
  technologies: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBlogPost {
  _id?: string;
  title: string;
  content: string;
  author: string;
  image: string;
  readTime: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IMessage {
  _id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "  textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export type TUser = {
  name: string;
  email: string;
  image: string;
};
