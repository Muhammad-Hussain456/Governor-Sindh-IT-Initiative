/* No Users:
Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var user_names = ["Admin", "Clerk", "Manager", "Customer", "Eric"];
user_names.forEach(function (user_name) {
    if (user_name === "Admin") {
        console.log("Hello Admin, Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user_name, ",thank you for logging again"));
    }
});
user_names = [];
if (user_names.includes("Admin" || "Clerk" || "Manager" || "Customer" || "Eric")) {
    console.log(user_names);
}
else {
    console.log("We need to find some users!");
}
