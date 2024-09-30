function loginInfo(email, password) {
    if (email && password) {
        console.log("email: ".concat(email, ", password: ").concat(password));
    }
    else {
        console.log("email: ".concat(email));
    }
}
loginInfo("muhammadhucen830@gmail.com, 87872384");
loginInfo("muhammadhucen830@gmail.com");
