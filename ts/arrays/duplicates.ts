export function findDuplicates<T>(nums: T[]): T[] {
  const found: T[] = nums.filter((n, idx, arr) => arr.indexOf(n) !== idx);

  return found;
}

// arrow function version
export const findDuplicatesAF = <T>(nums: T[]): T[] =>
  nums.filter((n, idx) => nums.indexOf(n) !== idx);
