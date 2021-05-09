const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
const server = app.listen(8282);

// routing
app.get('/', (req, res) => {
    // render is used to send an ejs view
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.statusCode = 404;
    res.render('404');
});