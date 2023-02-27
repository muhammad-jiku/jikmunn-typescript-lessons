function greetUser(name: string): void {
  let username: string = "John";

  if (name !== username) {
    let otherUsername: string = name;
    console.log(`Hello, ${otherUsername}!`);
  } else {
    console.log(`Welcome, ${username}!`);
  }
}

greetUser("Jiku");

//  compiler: tsc index.ts (like node index.js) && tsc index.ts --watch (like nodemon index.js)
