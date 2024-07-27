function reverseString(str: string = ""): string {
  return str.split("").reverse().join("");
}
console.log(reverseString("Mario"));

const reverseStringAF = (str: string = ""): string =>
  str.split("").reverse().join("");
console.log(reverseStringAF("Mario"));
