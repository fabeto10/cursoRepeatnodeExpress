const express = require('express');
const router = express.Router();
const ProductsService = require('./../service/products.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('filter', (req,res) => {
  res.send('soy un filter');
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;
