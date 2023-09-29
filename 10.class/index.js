//  class have constructor, properties, methods
var User = /** @class */ (function () {
    // constructor
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    //  method
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Wanda Maximoff", 25);
user1.display();
var user2 = new User("Vision", 5);
user2.display();
