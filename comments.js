// Create web server
// Create a web server that can respond to requests for /comments.json with a JSON file containing our list of comments.
// Start by creating a new module, comments.js, to contain our comments-related code:

// comments.js
// comments = [
//   { name: "John", message: "Hello!" },
//   { name: "Mary", message: "Hi there!" }
// ];
// module.exports = comments;
// Then, in app.js, require the module and use it to respond to requests for /comments.json:

// app.js
// var comments = require("./comments.js");
// app.get("/comments.json", function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify(comments));
// });
// Note that we use the JSON.stringify function to convert the comments array into a string before sending it to the client as the response body.

// Exercise
// Implement the comments module so that it exports an array of comment objects. Each comment object should have the following format:

// { "name": "John", "message": "Hello!" }
// Then, in app.js, use the module to respond to requests for /comments.json with a JSON representation of the list of comments.

// To verify your program, run:

// $ learnyounode verify app.js
// When you visit http://localhost:8080/comments.json in your browser, you should see the list of comments appear on the page.

var express = require('express');
var app = express();
var comments = require('./comments.js');

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(8080);