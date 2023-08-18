const mongoose = require('mongoose');
const Product = require('../models/Product');

class ProductManager {
  async addProduct(title, description, code, price, stock, category, thumbnails) {
    try {
      const productExists = await Product.findOne({ code });
  
      if (productExists) {
        console.log("Error: El producto tiene un código existente");
        return { error: "El producto tiene un código existente" };
      }
  
      const newProduct = new Product({
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbnails
      });
  
      await newProduct.save();
      console.log("El producto fue agregado correctamente");
      return newProduct;
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      return { error: "Error al agregar el producto" };
    }
  }

  async getProducts(limit) {
    try {
      let products = await Product.find();

      if (limit) {
        products = products.slice(0, limit);
      }

      return products;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error);
      return null;
    }
  }

  async updateProduct(id, update) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, update, { new: true });
      return updatedProduct;
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      return null;
    }
  }

  async deleteProduct(id) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      console.log("El producto fue eliminado correctamente");
      return deletedProduct;
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      return null;
    }
  }
}

module.exports = new ProductManager();
