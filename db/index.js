const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "grocery",
});

connection.connect();

//mysql has executed function (createConnection) and returned an object
//now export it so it can be imported into server > index.js

module.exports = connection;
