var http = require('http')
http.createServer(function(request,response) {
  //send HTTP head
  //status value : 200 ok
  //content style : text/plain
  response.writeHead(200,{'Content-Type':'text/plain'})
  response.end('hello world\n')
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001/');
