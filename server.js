"use strict";
// Dependencies
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

// App declaration
var app = express();

// App Settings
app.use(express.static(path.join(__dirname, 'skin')));

// Load a simple HTML view where the single page app is. The 
// frontend will be managed by Angular.


/* API Routes */
// returns profile data
var router = express.Router();
router.get('/marsxn', function(request, response) {
  var jsonFile = path.join(__dirname, 'data/marsxn.json');
  fs.readFile(jsonFile, 'utf-8', function(err, data){
    if (err) throw err;
    data = JSON.parse(data);
    response.json(data);
  });
});

// return the excerpt
router.get('/main', function(request, response) {
  var jsonFile = path.join(__dirname, 'data/main.json');
  fs.readFile(jsonFile, 'utf-8', function(err, data){
    if (err) throw err;
    data = JSON.parse(data);
    response.json(data);
  });
});
// return the portfolio
router.get('/portfolio', function(request, response) {
  var jsonFile = path.join(__dirname, 'data/portfolio.json');
  fs.readFile(jsonFile, 'utf-8', function(err, data){
    if (err) throw err;
    data = JSON.parse(data);
    response.json(data);
  });
});

// Attach the routes to the API.
app.use('/api', router);

app.route('/*').get(function(request, response) { 
  return response.sendFile(path.join(__dirname, 'skin/index.html')); 
});

// Listener
app.listen(port);
console.log("Server running on 8080 port");