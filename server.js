// Dependency
const bodyParser = require("body-parser");

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));



// Setup Server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
  console.log("server runing");
  console.log(`running on localhost: ${port}`);
}


app.post("/add", postData);

function postData(req, res) {
  const info = req.body;
  projectData = info;
  res.send(projectData);
}

app.get("/all", getData);

function getData(req, res) {
  res.send(projectData);
  console.log(projectData);
}

