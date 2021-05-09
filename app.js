const express = require('express');

// express app
const app = express();

// listen for requests
const server = app.listen(8282);

// routing
app.get('/', (req, res) => {
    // infers the type of content sent
    // infers the headers
    // infers the status code
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});