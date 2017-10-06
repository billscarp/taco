// Created left and right arrays

var larray = [];
var rarray = [];

// exporting app function to server
module.exports = function(app) {
	app.post('/api/tacos', function(req, res) {
		var taco = {
			name: req.body.name
		};

// Pushing in new taco to left array

	larray.push(taco);
		console.log(larray);
		// Sending the left array to the handlers file (index)
			res.redirect('/');
		});
		app.get("/", function (req, res) {
			res.render("index", { tacos: larray });
		});
	app.post('/api/eattaco', function(req, res) {
		var tacoid = {
			name: req.body.tacoid
		};

// Pushing in new taco to left array

	rarray.push(taco);
		console.log(rarray);
		// Sending the left array to the handlers file (index)
			res.redirect('/');
		});
		app.get("/", function (req, res) {
			res.render("index", { tacos: larray, tacosmain: rarray });
		});
	}