//  class have constructor, properties, methods

class User {
  // properties,
  userName: string;
  age: number;

  // constructor
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  //  method
  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User("Wanda Maximoff", 25);
user1.display();

let user2 = new User("Vision", 5);
user2.display();
