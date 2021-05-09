const express = require('express');

// express app
const app = express();

// listen for requests
const server = app.listen(8282);

// routing
app.get('/', (req, res) => {
    // looks for an absolute path
    // need a second argument to specify the root directory to search in
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/home', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});