const express = require('express');
const app = express();
const blogRoute = express.Router();

// Blogs model
let Blogs = require('../database/model/Blog');

// Add Blogs
blogRoute.route('/add-blog').post((req, res, next) => {
  console.log("bodycheck"+ req.body.blog_name);
  Blogs.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log("datacheck"+ data);
    }
  })
});

// Get all blog
blogRoute.route('/').get((req, res) => {
  Blogs.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single blog
blogRoute.route('/read-blog/:id').get((req, res) => {
  Blogs.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update blog
blogRoute.route('/update-blog/:id').put((req, res, next) => {
  Blogs.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Blogs successfully updated!')
    }
  })
})

// Delete blog
blogRoute.route('/delete-blog/:id').delete((req, res, next) => {
  Blogs.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = blogRoute;