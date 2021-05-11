const express = require('express');
const Blog = require('../models/blog');

const blogRouter = express.Router();

// GET
blogRouter.get('/', (req, res) => {
    Blog.find()
    .sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

blogRouter.get('/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog'});
});

blogRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('details', {blog: result, title:'Blog Details'})
    }).catch((err) => {
            console.log(err);
    })
});

// POST
blogRouter.post('/', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect("/blogs");
    })
    .catch((err) => {
        console.log(err);
    })
});

// DELETE
blogRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'});
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = blogRouter;