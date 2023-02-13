const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

outer.get ('/', (req, res) => {
    Blog.findAll ({
include: [{
    model : User,
    attributes: ["username"],
}]
    })
    
    });

    const blogs = blogData.map((blog) => blog.get ({plain:true}));


    