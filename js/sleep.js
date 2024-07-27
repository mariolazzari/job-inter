// function version
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
sleep(666).then(() => console.log("Sleep"));

// arrow function versions
const sleepAF = ms => new Promise(resolve => setTimeout(resolve, ms));
sleepAF(777).then(() => console.log("Sleep arrow"));

function sleepCB(ms, cb) {
  setTimeout(cb, ms);
}
sleepCB(888, () => console.log("Sleep callback"));
