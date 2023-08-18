const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [
    {
      id: String, // Cambia a String ya que es el ID del producto
      quantity: Number
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
