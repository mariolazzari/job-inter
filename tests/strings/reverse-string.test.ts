import { describe, it, expect } from "vitest";
import {
  reverseString,
  reverseStringAF,
} from "../../ts/strings/reverse-string";

describe("Reverse string", () => {
  const name = "Mario";
  const reverse = reverseString(name);

  it("should reverse string with function", () => {
    expect(reverseString(name)).toBe(reverse);
  });

  it("should have same length", () => {
    expect(name.length).toBe(reverse.length);
  });

  it("should reverse string with arrow function", () => {
    expect(reverseStringAF(name)).toBe(reverse);
  });
});
