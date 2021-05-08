const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/plain');
    
    // write the response
    res.write('Default response with react http module.');

    // end the response
    res.end();
});

const port = 8282;

server.listen(port, 'localhost', () => {
    console.log(`listening to requests on port ${port}`);
});