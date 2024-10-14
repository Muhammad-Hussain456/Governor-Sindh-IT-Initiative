function washing() {
    console.log("Washing started...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Washing completed");
        }, 4000);
    });
}
function soaking() {
    console.log("Soaking started...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Soaking completed");
        }, 4000);
    });
}
function drying() {
    console.log("Drying started...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("drying completed");
        }, 4000);
    });
}
washing()
    .then(function (value) {
    console.log(value);
    return soaking();
})
    .then(function (value) {
    console.log(value);
    return drying();
})
    .then(function (value) {
    console.log(value);
}).finally(function () {
    console.log("Working finished");
});
