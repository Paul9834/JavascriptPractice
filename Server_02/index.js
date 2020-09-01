const http = require ('http');


let server = http.createServer(
    function (request, response) {
        response.write('<h1> Paul9834 </h1>')
        response.end();
    }
);

server.listen(3000);