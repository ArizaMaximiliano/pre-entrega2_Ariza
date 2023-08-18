const express = require('express');
const router = express.Router();
const productManager = require('../managers/productManager');

// Obtener todos los productos o limitado
router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit);
  const products = await productManager.getProducts(limit);
  res.json(products);
});

// Obtener un producto por su ID
router.get('/:pid', async (req, res) => {
  const productId = req.params.pid;
  const product = await productManager.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
  const { title, description, code, price, stock, category, thumbnails } = req.body;
  const newProduct = await productManager.addProduct(title, description, code, price, stock, category, thumbnails);

  if (newProduct) {
    res.json(newProduct);
  } else {
    res.status(400).json({ error: 'Error al agregar el producto' });
  }
});

// Actualizar un producto por su ID
router.put('/:pid', async (req, res) => {
  const productId = req.params.pid;
  const updateFields = req.body;
  const updatedProduct = await productManager.updateProduct(productId, updateFields);

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Eliminar un producto por su ID
router.delete('/:pid', async (req, res) => {
  const productId = req.params.pid;
  const deletedProduct = await productManager.deleteProduct(productId);

  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
