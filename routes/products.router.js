const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0 ; i < limit; i++ ){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  };
});

router.get('filter', (req,res) => {
  res.send('soy un filter');
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Porduct 2',
    price: 2000
  });
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
