// function
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// arrow function
export const sleepAF = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

// callback
export function sleepCB(ms: number, cb: () => void): void {
  setTimeout(cb, ms);
}
