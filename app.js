var app = require("express")();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
})

app.get("/results",function(req,res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?i=tt3896198&apikey=dff0c193&s="+query,function(err,response,body){
        if(!err && response.statusCode==200){
            result = JSON.parse(body);
            res.render("results",{result:result});
        }
        else{
            res.send("SOMETHING WENT WRONG");
        }
    });
})


app.get("*",function(req,res){
    res.send("Page Not Found");
});
app.listen(3000,function(){
    console.log("Server is started");
})