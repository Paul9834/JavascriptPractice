const http = require ('http');
const boxen = require('boxen')

let server = http.createServer(
    function (request, response) {
        response.write('<h1> Paul9834 </h1>')
        response.end();
    }
);

server.listen(3000, () => {
     console.log(boxen(
         'Kevin Montealegre',
         {
             padding: 5,
             borderColor: 'blue'
         }
     ))
});