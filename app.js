var express = require("express")
var app = express();

app.get("/",function(req,res){
    res.send("Hi! welcome to my assignment");
});

app.get("/speak/:animals/",function(req,res){
    if(req.params.animals == "pig"){
        res.send("Oink");
    }
    else if(req.params.animals == "cow"){
        res.send("Moooo");
    }
    else if(req.params.animals == "dog"){
        res.send("Woof Woof!");
    }
});

app.get("/repeat/:str/:count",function(req,res){
    var count = Number(req.params.count);
    res.send(req.params.str.repeat(count));
});

app.get("*",function(req,res){
    res.send("Sorry...Page Not Found. What are doing with your life");
})

app.listen(3000,function(){
    console.log("Server is started");
});