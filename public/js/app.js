// button that tells taco where to go (event) keeps form from going over and over

$("#submit").on("click", function(event) {
		event.preventDefault();

		var taco = {
			name: $('#name').val().trim()
		};
// This is taking the information and sending to my api routes page (apitacos)
    $.post("/api/tacos", taco).then(function(res) {
	    window.location = '/';
    });
    
});
