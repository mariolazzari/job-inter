export function reverseString(str: string = ""): string {
  return str.split("").reverse().join("");
}

export const reverseStringAF = (str: string = ""): string =>
  str.split("").reverse().join("");
