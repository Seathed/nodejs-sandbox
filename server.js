const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    
    // write the response
    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<h1>This is a Title</h1>');
    res.write('<p>This is a paragraph in html.</p>');

    // end the response
    res.end();
});

const port = 8282;

server.listen(port, 'localhost', () => {
    console.log(`listening to requests on port ${port}`);
});