
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "https://via.placeholder.com/600/771796",
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  color: [],

  size: [],

  price: {
    type: Number,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
  
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;