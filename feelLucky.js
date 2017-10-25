//a lightweight web service that returns random fortune cookie style 'i feel lucky' phrases
//
var http = require('http');
var fs = require('fs');

process.on("uncaughtException", function(err){
	fs.writeFile("Exception.txt", err.stack, "utf8");
})

var filePath = process.cwd() + "\\lucky.txt";
console.log("Reading from file " + filePath);
var goodies = [];
fs.readFile(filePath, function(err, data) { 
			console.log("content:", data.toString());
			goodies.push(data.toString());
			console.log("Finish reading.");
});

var size = goodies.length;
var port = process.env.PORT || 8080;
http.createServer(function(req, res) {
			index = 0; //Math.floor(Math.random()*size);
			res.write(goodies[index].toString());
			res.end();
			console.log('index is ' + index + ':' + goodies[index]);
		}).listen(port);
console.log("Now try your luck");
