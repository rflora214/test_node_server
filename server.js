const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with a status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response data
    res.end('Hello World\n');
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
