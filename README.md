# Job Interview Q&A

## React

### Hooks

## Typescript

### Arrays

#### Find duplicates in a collection

```ts
// generic function
export function findDuplicates<T>(nums: T[]): T[] {
  const duplicates: T[] = nums.filter((n, idx) => nums.indexOf(n) !== idx);

  return duplicates;
}

// arrow function version
export const findDuplicatesAF = <T>(nums: T[]): T[] =>
  nums.filter((n, idx) => nums.indexOf(n) !== idx);
```