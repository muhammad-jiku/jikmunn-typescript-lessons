function greetUser(name) {
    var username = "John";
    if (name !== username) {
        var otherUsername = name;
        console.log("Hello, ".concat(otherUsername, "!"));
    }
    else {
        console.log("Welcome, ".concat(username, "!"));
    }
}
greetUser("Jiku");
//  compiler: tsc index.ts (like node index.js) && tsc index.ts --watch (like nodemon index.js)
