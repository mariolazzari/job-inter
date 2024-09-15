export const max = <T>(arr: T[]): T =>
  arr.reduce((acc, cur) => (cur > acc ? cur : acc));

export const min = <T>(arr: T[]): T =>
  arr.reduce((acc, cur) => (cur < acc ? cur : acc));
