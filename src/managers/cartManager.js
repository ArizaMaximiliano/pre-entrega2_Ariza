const mongoose = require('mongoose');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

class CartManager {
  async createCart() {
    try {
      const newCart = new Cart({
        products: []
      });

      await newCart.save();
      return newCart;
    } catch (error) {
      console.error("Error al crear el carrito:", error);
      return null;
    }
  }

  async getCartById(cartId) {
    try {
      const cart = await Cart.findById(cartId);
      return cart;
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
      return null;
    }
  }

  async addProductToCart(cartId, productId, quantity) {
    try {
      const cart = await Cart.findById(cartId);

      if (!cart) {
        console.log("Carrito no encontrado");
        return null;
      }

      const product = await Product.findById(productId);

      if (!product) {
        console.log("Producto no encontrado");
        return null;
      }

      const existingProduct = cart.products.find(item => item.product.toString() === productId);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({
          product: product._id,
          quantity: quantity
        });
      }

      await cart.save();
      return cart;
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
      return null;
    }
  }

}

module.exports = new CartManager();