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
      resolve("Soaking completed");
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

washing()
  .then((value) => {
    console.log(value);
    return soaking();
  })
  .then((value) => {
    console.log(value);
    return drying();
  })
  .then((value) => {
    console.log(value);
  }).finally(()=>{
    console.log("Working finished");
  })