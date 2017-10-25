//a lightweight web service that returns random fortune cookie style 'i feel lucky' phrases
//
var http = require('http');
http.createServer(function(req, res) {
				res.write("hello world");
				res.end();
			}).listen(process.env.PORT);
});
