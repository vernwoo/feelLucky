//a lightweight web service that returns random fortune cookie style 'i feel lucky' phrases
//
var http = require('http');
var port = process.env.PORT || 8080;
http.createServer(function(req, res) {
				res.write("hello world");
				res.end();
			}).listen(port);
console.log("server waiting at http://localhost:" + port);
