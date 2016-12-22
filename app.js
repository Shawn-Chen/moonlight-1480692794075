/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var Cloudant   = require('cloudant');

// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "ae237f43-4430-42cc-8ed1-32fc5be0a3d4-bluemix";
var password = process.env.cloudant_password || "cbb00dcad3028eb85084f61ef44d750dab44e5bf4625222a6d48d8ae64dc6724";
var cloudant = Cloudant({account:username, password:password});
var matchDB0 = cloudant.db.use('matchDB0');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

app.post('/match0', function(req, res, next) {
  hbDB.insert({data: myHeartbeat, timestamp: new Date().getTime()}, function(err, body){
    if(!err){
      console.log(body);
    }
  });
  res.send("heartbeat OK");
});
