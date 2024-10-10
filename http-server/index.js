const http = require('http');
const fs = require('fs');
const minimist = require('minimist');

// Accepting the port argument from the command line
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;  // Default to port 3000 if none is provided

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve home.html
    fs.readFile('./home.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading home.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/project') {
    // Serve project.html
    fs.readFile('./project.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading project.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/registration') {
    // Serve registration.html
    fs.readFile('./registration.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading registration.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // If route is not found
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
