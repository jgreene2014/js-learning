/**
 * Created by jsg665 on 10/29/2014.
 */

var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        });

    }//end onRequest

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}//end start

exports.start = start;

/*
 http.createServer(function(request, response){
 response.writeHead(200, {"Content-Type" : "text/plain"});
 response.write("Disco Biscuits Rock");
 response.end();
 }).listen(8888);
 */


