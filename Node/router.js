/**
 * Created by jsg665 on 10/29/2014.
 */

function route(handle, pathname, response, postData){
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response,postData);
    }//end if
    else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }//end else
}//end route

exports.route = route;