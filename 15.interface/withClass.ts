// class implements interface
interface IUserFormatter {
  formatUser: () => string;
}

export class User implements IUserFormatter {
  //  if private access modifier did not use. then, fullName: string, age: number

  constructor(private fullName: string, private age: number) {}
  //  if private access modifier did not use. then, {vthis.fullName = fullName; this.age = age;}

  formatUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

let user = new User("Hope Van Dyne", 43);
console.log(user);
console.log(user.formatUser());
