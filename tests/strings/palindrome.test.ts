import { describe, it, expect } from "vitest";
import { palindrome, palindromeReuse } from "../../ts/strings/palindrome";

describe("Palindrome", () => {
  const pali = "abba";
  const notPali = "mamma";

  it("should identify palindrome string", () => {
    expect(palindrome(pali)).toBeTruthy();
  });

  it("should identify not palindrome string", () => {
    expect(palindrome(notPali)).toBeFalsy();
  });

  it("should identify palindrome string reusing reverse", () => {
    expect(palindromeReuse(notPali)).toBeFalsy();
  });

  it("should identify not palindrome string reusing reverse", () => {
    expect(palindromeReuse(notPali)).toBeFalsy();
  });
});
