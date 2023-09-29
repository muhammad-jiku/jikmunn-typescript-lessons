class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

// student class inherits user class
// inheritance helps to acquire properties of one class to another
class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("Spider Man", 25, 1302020015);
student1.display();

let user1 = new User("Iron Man", 55);
user1.display();

let user2 = new User("Captain America", 131);
user2.display();
