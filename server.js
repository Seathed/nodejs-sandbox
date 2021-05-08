const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.url, req.method);

    let path = './views/';

    res.statusCode = 200;

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/home':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // send a html file
    fs.readFile(path, (err,data) => {
    if(err) {
        console.log(err);
    }
    res.end(data);
    });
});

const port = 8282;

server.listen(port, 'localhost', () => {
    console.log(`listening to requests on port ${port}`);
});