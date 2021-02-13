// YOUR SERVER CODE HERE

const express = require("express");
const app = express(); //returns an object w methods i.e. .get .listen
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hello World!`); //sends to http://localhost:8080/
  //res.status(200);
  //res.write(`Hello World!`);
  //res.end
});

app.listen(port, (err) => {
  if (err) {
    console.log(err, `Error connecting to server`);
  } else {
    console.log(`Listening on localhost:${port}`);
  }
});
