var names;
names = {
    name1: "peter perker - tobey maigure"
};
console.log(names);
var users;
users = [];
var user1;
user1 = {
    userName: "peter perker - andrew garfield",
    userId: 101
};
users.push(user1);
var user2;
user2 = {
    userName: "peter perker - tom holland",
    userId: 102
};
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
    console.log(users[key]["userId"]);
}
console.log(users);
