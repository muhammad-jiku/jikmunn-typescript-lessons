// function signature
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string) => string;

userInfo1 = () => {
  console.log("Dr.Stepehen Strange is 56 years old");
};

userInfo2 = (name: string) => {
  console.log(`${name} is 56 years old`);
};

userInfo3 = (name: string): string => {
  return `${name} is 56 years old`;
};

userInfo1();
userInfo2("Dr.Stepehen Strange");
console.log(userInfo3("Dr.Stepehen Strange"));
