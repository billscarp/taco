//var connection = require('../db/connect');  -- use for sql

module.exports = function(app) {
	app.get("/", function(req, res) {
		

			res.render("index");
		});
	
}

