var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200,{'Context-Type':'text/html'})
    response.end('<h1>Hello World!</h1>');

})
server.listen(3000); //port number 실행중인 프로세스 구분 