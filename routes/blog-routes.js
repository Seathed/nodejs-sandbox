const express = require('express');
const blogController = require('../controllers/blog-controller');
const blogRouter = express.Router();

// GET
blogRouter.get('/', blogController.blogIndex);

blogRouter.get('/create', blogController.blogCreateGet);

blogRouter.get('/:id', blogController.blogDetails);

// POST
blogRouter.post('/', blogController.blogCreatePost);

// DELETE
blogRouter.delete('/:id', blogController.blogDelete);

module.exports = blogRouter;