const Blog = require('../models/blog');

// blogIndex, blogDetails, blogCreateGet, BlogCreatePost, BlogCreateDelete

const blogIndex = (req, res) => {
    Blog.find()
    .sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
}

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('details', {blog: result, title:'Blog Details'})
    }).catch((err) => {
            console.log(err);
    })
}

const blogCreateGet = (req, res) => {
    res.render('create', { title: 'Create a New Blog'});
}

const blogCreatePost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect("/blogs");
    })
    .catch((err) => {
        console.log(err);
    })
}

const blogCreateDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'});
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    blogIndex,
    blogDetails,
    blogCreateGet,
    blogCreatePost,
    blogCreateDelete
}