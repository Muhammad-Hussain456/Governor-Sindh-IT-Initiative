function washing() {
  console.log("Washing started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Washing completed");
    }, 4000);
  });
}
function soaking() {
  console.log("Soaking started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Soaking not completed");
    }, 4000);
  });
}
function drying() {
  console.log("Drying started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("drying completed");
    }, 4000);
  });
}

async function runWashingMachine() {
  try {
    const result1 = await washing();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("run anyway");
  }
}
runWashingMachine();
