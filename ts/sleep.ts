function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

sleep(666).then(() => console.log("Sleep"));

const sleepAF = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

sleepAF(777).then(() => console.log("Sleep AF"));
