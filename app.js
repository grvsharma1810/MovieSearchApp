var express = require("express")
var app = express();

app.get("/",function(req,res){
    res.send("Hi There");
});

app.get("/dogs",function(req,res){
    console.log("Someone made request");
    res.send("This page is for dogs");
});

app.listen(3000,function(){
    console.log("Server is started");
});