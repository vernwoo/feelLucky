const supertest = require('supertest');
const app = require('../feelLucky');


describe('Unit test', () => {
	let req = null;
	let server = null;

	before(function(done){
		server = app.listen(done)
		req = supertest.agent(server)
	});

	it('get virtual fortune cookie with success', function(done){
		req.get('/').expect(200).end(function(err,res) {
			console.log('response is ' + res.text);
			done();
		});
	});

	after(function(done){
		app.stop();
		done();
	});
});
