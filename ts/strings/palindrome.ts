function palindrome(str = ""): boolean {
  return str === str.split("").reverse().join("");
}

function check(str: string): void {
  if (palindrome(str)) {
    return console.log(`${str} is palindrome`);
  }

  console.log(`${str} is not palindrome`);
}

let test = "mamma";
check(test);
test = "abba";
check(test);
