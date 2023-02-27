// enum example
// helps us to store constants, duplicate value is not allowed
// numeric enum
var UserRequest;
(function (UserRequest) {
    //   ReadData,
    UserRequest[UserRequest["ReadData"] = 2] = "ReadData";
    UserRequest[UserRequest["SaveData"] = 5] = "SaveData";
    UserRequest[UserRequest["UpdateData"] = 6] = "UpdateData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------");
// string enum
(function (UserRequest) {
    UserRequest["ReadDataa"] = "READ_DATA";
    UserRequest["SaveDataa"] = "SAVE_DATA";
    UserRequest["UpdateDataa"] = "UPDATE_DATA";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadDataa);
console.log(UserRequest.SaveDataa);
console.log(UserRequest["UpdateDataa"]);
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------");
// Heterogeneous enum
var User;
(function (User) {
    User[User["id"] = 101] = "id";
    User["name"] = "tony stark";
})(User || (User = {}));
console.log(User);
console.log(User.id);
console.log(User.name);
//  An enum is a way to define a set of named constants with corresponding numeric values. This can make it easier to work with a set of related constants in your code. enums can be useful for defining a set of related constants that have corresponding numeric values. They can help make your code more readable and maintainable by providing meaningful names for these constants, instead of using raw numbers.
