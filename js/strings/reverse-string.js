// on line
function reverseString(str = "") {
  return str.split("").reverse().join("");
}
console.log(reverseString("Mario"));

const reverseStringAF = (str = "") => str.split("").reverse().join("");
console.log(reverseStringAF("Mario"));

// more steps

// loop version
function reverseStringStep(str = "") {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseStringStep("Mario"));

module.exports = { reverseString };
