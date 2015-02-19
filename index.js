doSomething();

async function doSomething() {
  console.log({ fn: "doSomething", at: "start", time: Date.now() });
  await blocker();
  console.log({ fn: "doSomething", at: "finish", time: Date.now() });
}

async function blocker() {
  console.log({ fn: "blocker", at: "start", time: Date.now() });
  await somePromiseGenerator();
  console.log({ fn: "blocker", at: "finish", time: Date.now() });
}

function somePromiseGenerator() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 2000);
  });
}
