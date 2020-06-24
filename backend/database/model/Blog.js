const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Blog = new Schema({
  blog_name: {
    type: String
  },
  blog_description: {
    type: String
  },
  blog_image: {
    type: String
  },
  blog_details: {
    type: String
  },

}, {
  collection: 'blogs'
})

module.exports = mongoose.model('Blog', Blog)