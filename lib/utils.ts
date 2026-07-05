import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseNumber(no: number): string {
  return no < 10 ? `0${no}` : no + "";
}