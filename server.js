// DEPENDENCIES INSTALLS
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");


// INSTALL MY FILES

var htmlRoutes = require("./routes/htmlRoutes.js")





// SET EXPRESS AND PORT 
var app = express();
var PORT = process.env.PORT || 4600;


// SETTING MIDDLEWARE
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")



// Calling my files.
 htmlRoutes(app);


// SETTING PORT TO LISTEN
app.listen(PORT, function() {
    console.log("app listining on PORT " + PORT);
});

  


