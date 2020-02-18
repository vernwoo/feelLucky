//a lightweight web service that returns random fortune cookie style 'i feel lucky' phrases
//
var http = require('http');
var fs = require('fs');
var isProd = true;
var portnum = isProd ? 80 : 8080 
var isLinux = false;
var file = isLinux? "/lucky.txt" : "\\lucky.txt";
var filePath = process.cwd() + file;
console.log("Reading from file " + filePath);
var goodies = [];
fs.readFile(filePath, function(err, data) { 
			goodies= data.toString().split("\n");
			console.log("Finish reading.");
			var size = goodies.length;
			var port = process.env.PORT || portnum;
			http.createServer(function(req, res) {
				index = Math.floor(Math.random()*size);
				res.write(""+goodies[index]);
				res.end();
				console.log('index is ' + index + ':' + goodies[index]);
			}).listen(port);
			console.log("Now try your luck at http://localhost:" + portnum.toString());
});
