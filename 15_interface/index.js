//  Interface vs type
//  both are nearly similar in most cases.
//  However, Adding new field after creation is possible for an interface but not possible for a type.
// without interface
var users = [];
var user1 = {
    id: 1,
    name: "Mr. Potato",
    age: 32
};
var user2 = {
    id: 2,
    name: "Ms. Tomato",
    age: 21
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
console.log("-----------------------------------------------------------------------------");
var userss = [];
var userr1 = {
    id: 1,
    name: "Mr. Wolverine",
    age: 32
};
var userr2 = {
    id: 2,
    name: "Ms. Jean Grey",
    age: 21
};
userss.push(userr1);
userss.push(userr2);
var printUserrInfo = function (userr) {
    console.log("userid = ".concat(userr.id, ", name = ").concat(userr.name, ", age = ").concat(userr.age));
};
userss.forEach(function (userr) { return printUserrInfo(userr); });
