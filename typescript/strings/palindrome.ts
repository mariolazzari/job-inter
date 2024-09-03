import { reverseString } from "./reverse-string";

export function palindrome(str = ""): boolean {
  return str === str.split("").reverse().join("");
}

// reuse reverse
export const palindromeReuse = (str: string): boolean =>
  reverseString(str) === str;
