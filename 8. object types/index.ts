let names: object;
names = {
  name1: "peter perker - tobey maigure",
};
console.log(names);

let users: object[];
users = [];

let user1: { userName: string; userId: number };
user1 = {
  userName: "peter perker - andrew garfield",
  userId: 101,
};
users.push(user1);

let user2: { userName: string; userId: number };
user2 = {
  userName: "peter perker - tom holland",
  userId: 102,
};

users.push(user2);

for (const key in users) {
  console.log(users[key]["userName"]);
  console.log(users[key]["userId"]);
}

console.log(users);
