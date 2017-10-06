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
		
	app.post('/api/eattaco', function(req, res) {
		var tacoid = {
			name: req.body.tacoid
		};

		var taconame = {
			name: req.body.name
		};

// Pushing in new taco to left array

	rarray.push(taconame);
		console.log(rarray);
		larray.splice(tacoid,1);
		// Sending the left array to the handlers file (index)
			res.redirect('/');
		});
		app.get("/", function (req, res) {
			res.render("index", { tacos: larray, tacosmain: rarray });
		});
	}