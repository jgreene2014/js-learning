/**
 * Created by jsg665 on 10/29/2014.
 */

function start(){
    console.log("Request handler 'start' was called.");
}//end start

function upload(){
    console.log("Request handler 'upload' was called.");
}//end upload

exports.start = start;
exports.upload = upload;