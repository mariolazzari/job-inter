function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

sleep(666).then(() => console.log("Sleep"));

const sleep2 = ms => new Promise(resolve => setTimeout(resolve, ms));

sleep(777).then(() => console.log("Arrow sleep"));
