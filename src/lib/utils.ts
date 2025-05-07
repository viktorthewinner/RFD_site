import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MAP_KEY = "AIzaSyAF28eqS0I6mIG5WBgVDweelsLD22uZobI";
