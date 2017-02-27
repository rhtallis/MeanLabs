const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
var app = require("./app");

var server = http.createServer ((req, res) => {
    res.statusCode = 200;
    var theHead = req.url;
    var theHeadArray = theHead.split('/');

    res.write(app(theHeadArray[1], theHeadArray[2]).toString());
    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
})