const express = require('express');
const fs = require('fs');
const timestamp = require('time-stamp');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
const server = app.listen(8282);

app.use(morgan('dev'));

app.use((req, res, next) => {
    fs.appendFile('./log.txt','Request Made at ' + `${timestamp('YY/MM/DD HH:mm:ss')}` + '\nHost: ' + req.hostname + '\nPath: ' + req.path + '\nMethod: ' + req.method + '\n\n', (err) => {
        if(err) {
            console.log(err);
        }
    });
    next();
});

// routing
app.get('/', (req, res) => {
    // render is used to send an ejs view
    const blogs = [
        {title: 'Yoshi is a dinosaur', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Waluigi is the best character in the Mario Universe', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to play Mario Kart', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ]
    res.render('index', {title: 'Home', blogs});
});

app.get('/home', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a New Blog'});
});

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.statusCode = 404;
    res.render('404', {title: '404'});
});