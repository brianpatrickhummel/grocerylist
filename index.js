// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var keys = require("./config/keys");

// Require Schemas
var User = require("./models/User.js");

// Create Instance of Express
var app = express();
const PORT = process.env.PORT || 5000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// MongoDB Configuration configuration
mongoose.connect(keys.mongoURI, { useMongoClient: true });
console.log("THE MONGO URI IS: ", keys.mongoURI);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
