module.exports =  function(app){

    
app.get("/", function(req, res){



var tacodata = [{
    id : 1,
    task : "study"
},
{
    id : 2,
    task: "celebrate"
}

]


res.render("index", {orders : tacodata})


})

app.get("/contact")

}

