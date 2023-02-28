"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "name: ".concat(_this.fullName, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
exports.User = User;
var user = new User("Hope Van Dyne", 43);
console.log(user);
console.log(user.formatUser());
