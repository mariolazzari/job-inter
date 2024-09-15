// generic function
export function findDuplicates<T>(arr: T[]): T[] {
  return arr.filter((el, idx) => arr.indexOf(el) !== idx);
}

// arrow function version
export const findDuplicatesAF = <T>(arr: T[]): T[] =>
  arr.filter((el, idx) => arr.indexOf(el) !== idx);
