function washing(callback) {
    console.log("Washing started...");
    setTimeout(function () {
        console.log("Washing completed");
        callback();
    }, 6000);
}
function soaking(callback) {
    console.log("Soaking started...");
    setTimeout(function () {
        console.log("Soaking completed");
        callback();
    }, 4000);
}
function drying() {
    console.log("Drying started...");
    setTimeout(function () {
        console.log("Drying Completed");
    }, 4000);
}
washing(function () {
    soaking(function () {
        drying();
    });
});
