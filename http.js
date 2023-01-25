const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("welcome to home page");
        res.end();
    }
    else if (req.url === '/about') {
        res.write("you are reading our bio");
        res.end();
    }
    else {
        res.writeHead(404);
        res.end(`
        <h1> Oops Sorry</h1>
        <p>Your requested page not found</p>
        <a href="/">back Home</a>
        `);
    }
});

server.listen(3000);