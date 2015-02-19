let promisify = require('promisify-node');
let asyncDelay = promisify(delay);

doSomething();

async function doSomething() {
  console.log({ fn: "doSomething", at: "start", time: Date.now() });
  await blocker();
  console.log({ fn: "doSomething", at: "finish", time: Date.now() });
}

async function blocker() {
  console.log({ fn: "blocker", at: "start", time: Date.now() });
  await asyncDelay(2000);
  console.log({ fn: "blocker", at: "finish", time: Date.now() });
}

function delay(time, callback) {
  setTimeout(callback, time);
}
