// enum example
// helps us to store constants, duplicate value is not allowed

// numeric enum
enum UserRequest {
  //   ReadData,
  ReadData = 2, // if numeric designs from one key, rest of the key will continue their counting from defined number
  SaveData = 5,
  UpdateData,
}
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// string enum
enum UserRequest {
  ReadDataa = "READ_DATA",
  SaveDataa = "SAVE_DATA",
  UpdateDataa = "UPDATE_DATA",
}
console.log(UserRequest);
console.log(UserRequest.ReadDataa);
console.log(UserRequest.SaveDataa);
console.log(UserRequest["UpdateDataa"]);

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
);

// Heterogeneous enum
enum User {
  id = 101,
  name = "tony stark",
}

console.log(User);
console.log(User.id);
console.log(User.name);

//  An enum is a way to define a set of named constants with corresponding numeric values. This can make it easier to work with a set of related constants in your code. enums can be useful for defining a set of related constants that have corresponding numeric values. They can help make your code more readable and maintainable by providing meaningful names for these constants, instead of using raw numbers.
