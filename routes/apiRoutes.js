var larray = [];
var rarray; [];

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
			res.render('index', {tacos:larray});
		});
}