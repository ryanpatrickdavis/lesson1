/**
 * Created by Ryan on 2016-09-08.
 */

// link to http library that ships with node
var http = require('http');

// launch the http server and send a response asynchronously
http.createServer(function(request, response){
    response.writehead(200); //status ok
    response.end ('First node page');
}).listen(3000);

console.log('Server running on port 3000');