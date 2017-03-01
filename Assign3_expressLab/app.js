var http = require('http');
var express = require('express');
var app = express();
var port = 3000;


app.set("view engine", "vash");
app.get('/', function(req,res){
    console.log(req.url)
    res.render("vash/index", {the_title: "expressLab - Tallis Hobbs"});
});

var server = http.createServer(app);

app.listen(port, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port " + port);
    }
});
