// YOUR SERVER CODE HERE

const express = require("express");
const app = express(); //returns an object w methods i.e. .get .listen
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

app.use(cors());

//when page initializes, send GET request to server
//this belongs on client > src > app.jsx (???)
//where we import $ from "jquery";
// $.ajax({
//   url: "http://localhost8080/GroceryList"
//   //url: "http://localhost8080"
//   type: "GET",
//   success: (data) => {
//     this.setState({
//       groceryListData: data,
//     });
//   };
//   //error: (err) => {
//   //done: () => {
// });


app.get('/groceryList', (req, res) => {
  //console.log('(endpoint Grocery List items & quantities)');
  //db.query will happen asynchronously vvv
  db.query('SELECT itemName, quantity FROM groceryList', (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

// app.get('/', (req, res) => {
//   res.status(200).send(`Grocery List Items`);
//   //res.send(`Hello World!`); //sends to http://localhost:8080/
//   //res.status(200);
//   //res.write(`Hello World!`);
//   //res.end
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err, `Error connecting to server`);
  } else {
    console.log(`Listening on localhost:${port}`);
  }
});
