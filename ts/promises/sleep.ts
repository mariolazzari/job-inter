// function
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
sleep(666).then(() => console.log("Sleep"));

// arrow function
const sleepAF = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

sleepAF(777).then(() => console.log("Sleep AF"));

// callback
function sleepCB(ms: number, cb: () => void): void {
  setTimeout(cb, ms);
}

sleepCB(888, () => console.log("Sleep callback"));
