import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = <T>(value: T) =>
  JSON.parse(JSON.stringify(value));
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);
