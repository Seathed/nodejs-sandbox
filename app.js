const express = require('express');
const fs = require('fs');
const timestamp = require('time-stamp');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// Connect to MongoDB
const dbURI = 'mongodb+srv://database-admin:M1LiGqobCVGvDCTX@seathed-node.pl9vp.mongodb.net/seathed-node?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        const server = app.listen(8282);
        console.log('connected to mongodb')
    })
    .catch((err) => {
        console.log(err);
});

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// morgan console logging
app.use(morgan('dev'));

// mongoose and mongodb sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog',
        snippet: 'About my blog',
        body: 'More information about my blog'
    });
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('6097676e2bf76905cc8e6d3f')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

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