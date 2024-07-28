const { reverseString } = require("./reverse-string");

function palindrome(str = "") {
  return str === str.split("").reverse().join("");
}

function check(str) {
  if (palindrome(str)) {
    return console.log(`${str} is palindrome`);
  }

  console.log(`${str} is not palindrome`);
}

let test = "mamma";
check(test);
test = "abba";
check(test);

// reuse string
const reverseReuse = str => reverseString(str) === str;
console.log(reverseReuse("Mario"));
console.log(reverseReuse("abba"));
