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
