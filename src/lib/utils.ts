import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPagination(
  currentPage: number,
  totalPages: number,
): (number | string)[] {
  const delta = 1;
  const range: (number | string)[] = [];

  const left = currentPage - delta;
  const right = currentPage + delta;

  for (let i = 0; i < totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i <= right)) {
      range.push(i);
    } else if (i === left - 1 || i === right + 1) {
      range.push("...");
    }
  }

  return range;
}


/*

export function getPagination(
  currentPage: number,
  totalPages: number,
): (string | number)[] {
  const delta = 1;
  const range: (string | number)[] = [];

  const left = currentPage - delta;
  const right = currentPage + delta;

  for (let i = 0; i < totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i <= right)) {
      range.push(i);
    } else if (i === left - 1 || i === right + 1) {
      range.push("...");
    }
  }

  return range;
}*/
