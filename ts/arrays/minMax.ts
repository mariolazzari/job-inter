export const max = (arr: number[]): number =>
  arr.reduce((acc, cur) => (cur > acc ? cur : acc));

export const min = (arr: number[]): number =>
  arr.reduce((acc, cur) => (cur < acc ? cur : acc));
