# Job Interview Q&A

## React

### Hooks

## Typescript

### Arrays

#### Find duplicates in a collection

```ts
// generic function
export function findDuplicates<T>(arr: T[]): T[] {
  return arr.filter((el, idx) => arr.indexOf(el) !== idx);
}

// arrow function version
export const findDuplicatesAF = <T>(arr: T[]): T[] =>
  arr.filter((el, idx) => arr.indexOf(el) !== idx);
```

#### Find min / max in a collection

```ts
export const max = <T>(arr: T[]): T =>
  arr.reduce((acc, cur) => (cur > acc ? cur : acc));

export const min = <T>(arr: T[]): T =>
  arr.reduce((acc, cur) => (cur < acc ? cur : acc));
```

### Boolean

#### Difference between *==* and *===*

```ts
const sevenString = "7";
const sevetNumber = 7;

sevenString == sevenNumber; // true
sevenString === sevenNumber; // false
```