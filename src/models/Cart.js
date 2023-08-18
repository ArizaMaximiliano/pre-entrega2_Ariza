const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [
    {
      id: String, // ID del producto en el carrito
      quantity: Number // Cantidad del producto en el carrito
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
