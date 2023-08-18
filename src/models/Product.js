const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,        // Título del producto 
  description: String,  // Descripción del producto 
  code: String,         // Código único del producto 
  price: Number,        // Precio del producto 
  stock: Number,        // Cantidad en stock del producto 
  category: String,     // Categoría del producto 
  thumbnails: [String]  // Lista de URLs de imágenes del producto
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;