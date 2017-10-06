//var connection = require('../db/connect');

module.exports = function(app) {
	app.get("/", function(req, res) {
		

			res.render("index");
		});
	
}

