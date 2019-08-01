var app = require("express")()

app.get("/results",function(req,res){
    res.send("HI there");
})
app.listen(3000,function(){
    console.log("Server is started");
})