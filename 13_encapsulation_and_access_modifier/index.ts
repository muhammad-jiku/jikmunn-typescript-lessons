// 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.
// Encapsulation helps to manage the visibility of class members.
// Access modifiers: public, private, protected, readonly

// public, private, protected, readonly
class User {
  // by default Encapsulation access modifier is: public
  readonly userName: string; // readonly: can be accessed to only to read but can not be modified
  public age: number; // public: can be accessed from outside of class and modify
  // protected age: number;  // protected: other class can inherit protected property by extend its class and con use but if did not extends, it can not access from outside and modify

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  private studentId: number; // private: can not inherit and also can not access. To use private property, for set and get property must needs to create public methods, and otherwise defined private property is untouchable!

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("thor", 1631, 1302020015);
student1.setStudentId(1302020017);
console.log(student1.getStudentId());
student1.display();

let user1 = new User("mjolnir", 1600);
console.log(user1.userName);
user1.display();
