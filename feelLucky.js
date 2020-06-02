//a lightweight web service that returns random fortune cookie style 'i feel lucky' phrases
//
var fs = require('fs');
var isProd = false;
var portnum = isProd ? 80 : 8080 
var isLinux = true;
var file = isLinux? "/lucky.txt" : "\\lucky.txt";
var filePath = process.cwd() + file;
console.log("Reading from file " + filePath);
var goodies = [];
var size;
var express = require('express');
var app = express();

var data = fs.readFileSync(filePath); 
goodies= data.toString().split("\n");
console.log("Finish reading.");
size = goodies.length;
setupsite();

function setupsite()
{
	app.get('/', function(req, res) {
				index = Math.floor(Math.random()*size);
				res.write(""+goodies[index]);
				res.end();
				console.log('index is ' + index + ':' + goodies[index]);
        });

	app.listen(portnum, function(){
    		console.log("Now try your luck at http://localhost:" + portnum.toString());
	});
}

//export app module
module.exports = app;

