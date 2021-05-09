const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    
    // lodash
    const num = _.random(0, 25);
    console.log(num);

    // function will only ever run once
    const greet = _.once(() => {
        console.log('hello');
    });

    // only the first greet will execute
    greet();
    greet();

    let path = './views/';

    res.statusCode = 200;

    // set header content type
    res.setHeader('Content-Type', 'text/html');

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
        case '/about-me':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

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