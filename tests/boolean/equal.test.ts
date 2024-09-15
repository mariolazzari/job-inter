import { sevetNumber, sevenString } from "ts/boolean/equal";

describe("Difference between '==' and '==='", () => {
  it("should return true (7 == '7')", () => {
    expect(sevetNumber == sevenString).toBeTruthy();
  });

  it("should return false (7 === '7')", () => {
    expect(sevetNumber === sevenString).toBeFalsy();
  });
});
