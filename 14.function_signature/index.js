// function signature
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Dr.Stepehen Strange is 56 years old");
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 56 years old"));
};
userInfo3 = function (name) {
    return "".concat(name, " is 56 years old");
};
userInfo1();
userInfo2("Dr.Stepehen Strange");
console.log(userInfo3("Dr.Stepehen Strange"));
