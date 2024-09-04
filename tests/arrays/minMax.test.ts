import { describe, it, expect } from "vitest";
import { min, max } from "../../ts/arrays/minMax";

describe("Find max/min in a given array", () => {
  let res: number;
  const nums = [1, 22, 2, 567, 23];
  const MIN = 1;
  const MAX = 567;

  it("should compute min value", () => {
    res = min(nums);
    expect(res).toBe(MIN);
    expect(res).toBeDefined();
    expect(res).toBeTypeOf("number");
  });

  it("should compute max value", () => {
    res = max(nums);
    expect(res).toBe(MAX);
    expect(res).toBeDefined();
    expect(res).toBeTypeOf("number");
  });
});
