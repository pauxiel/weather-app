// Dependency
const bodyParser = require("body-parser");

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

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

app.get("/", (req, res) => {
  res.send("<p>madman</p>");
});

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
  console.log("server runing");
  console.log(`running on localhost: ${port}`);
}





app.post('/add', postData);

function postData(req,res){

  newEntry = {
    zipCode: req.body.zip,
    feeling: req.body.feeling,
    
  }

  projectData.push(newEntry)
  // console.log(projectData);
}

// app.post('/add', async function(req, res){
//   const body = await req.body;
// })




