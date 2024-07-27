function reverseString(str = "") {
  return str.split("").reverse().join("");
}
console.log(reverseString("Mario"));

const reverseStringAF = (str = "") => str.split("").reverse().join("");
console.log(reverseStringAF("Mario"));
