import { describe, test, expect } from "vitest";
import { findDuplicates, findDuplicatesAF } from "../../ts/arrays/duplicates";
import { User } from "../../types/User";

describe("Find duplicates in a collection", () => {
  const nums = [1, 2, 3, 3, 4, 5, 6, 1];
  const dups = [3, 1];

  const mario: User = {
    name: "Mario",
    age: 49,
    isAdmin: true,
  };
  const mary: User = {
    name: "Mariarosa",
    age: 48,
  };
  const users = [mario, mary, mario];
  const userDups = [mario];

  test("of Numbers", () => {
    const res = findDuplicates<number>(nums);
    expect(res).toStrictEqual(dups);
    expect(res.length).toBe(dups.length);
  });

  test("Arrow function with type inferred", () => {
    const res = findDuplicatesAF(nums);
    expect(res).toStrictEqual(dups);
    expect(res.length).toBe(dups.length);
  });

  test("of Users", () => {
    const res = findDuplicates<User>(users);
    expect(res).toStrictEqual(userDups);
    expect(res.length).toBe(userDups.length);
  });
});
