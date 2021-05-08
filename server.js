const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received');
});

const port = 8282;

server.listen(port, 'localhost', () => {
    console.log(`listening to requests on port ${port}`);
});