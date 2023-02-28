// class implements interface
interface IUserFormatter {
  formatUser: () => string;
}

export class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}

  formatUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

let user = new User("Hope Van Dyne", 43);
console.log(user);
console.log(user.formatUser());
