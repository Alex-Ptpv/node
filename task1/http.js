// The http module in Node.js allows you to create an HTTP server and make HTTP requests. 
// It is used for building web applications and APIs. 
// You can create a server to listen for incoming HTTP requests and respond to them. 

// http_example.js
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});