/**
 * Created by jsg665 on 10/29/2014.
 */

console.log("Disco Biscuits Rock");

var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8889);

console.log("Server has started.");
