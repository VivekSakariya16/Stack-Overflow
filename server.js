const { get } = require("http");
const connectToDatabase = require("./db");
const addUser = require("./Controller/AddUser");
const verifyUser = require("./Controller/Login");

connectToDatabase();

const user = addUser("vivek@gmail.com", "vivek123");
console.log(user);

// const verify = verifyUser("vivek@gmail.com", "vivek123");
// console.log(verify);

// const uid = getUid();