//  Interface vs type
//  both are nearly similar in most cases.
//  However, Adding new field after creation is possible for an interface but not possible for a type.

// without interface
let users: {
  id: number;
  name: string;
  age: number;
}[] = [];

let user1: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "Mr. Potato",
  age: 32,
};

let user2: {
  id: number;
  name: string;
  age: number;
} = {
  id: 2,
  name: "Ms. Tomato",
  age: 21,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: { id: number; name: string; age: number }) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));

console.log(
  "-----------------------------------------------------------------------------"
);

// with interface
interface IUser {
  id: number;
  name: string;
  age: number;
}

let userss: IUser[] = [];

let userr1: IUser = {
  id: 1,
  name: "Mr. Wolverine",
  age: 32,
};
let userr2: IUser = {
  id: 2,
  name: "Ms. Jean Grey",
  age: 21,
};

userss.push(userr1);
userss.push(userr2);

const printUserrInfo = (userr: IUser) => {
  console.log(`userid = ${userr.id}, name = ${userr.name}, age = ${userr.age}`);
};

userss.forEach((userr) => printUserrInfo(userr));
