/**
 * Created by jsg665 on 10/29/2014.
 */

/*
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Disco Biscuits Rock");
    response.end();
}).listen(8888);
*/

var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }//end onRequest

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}//end start

exports.start = start;




