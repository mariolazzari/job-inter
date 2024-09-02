import { describe, it, expect, vi } from "vitest";
import { sleep, sleepAF } from "../../ts/promises/sleep";

describe("Promises", () => {
  const ms = 1000;

  it("should resolve sleep function within 1s", async () => {
    const delay = vi.fn((ms: number) => sleep(ms));
    await delay(ms);

    expect(delay).toHaveResolvedWith(undefined);
  });

  it("should resolve sleep arrow function within 1s", async () => {
    const delay = vi.fn((ms: number) => sleepAF(ms));
    await delay(ms);

    expect(delay).toHaveResolvedWith(undefined);
  });
});
