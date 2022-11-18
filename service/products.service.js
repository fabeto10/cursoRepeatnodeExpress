const faker = require('faker');

class ProductsService{
  constructor(){
    this.products = [];
    this.generate();
  };

  generate(){
    const limit = 100;
    for(let i = 0 ; i < limit; i++ ){
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
    };
  };

  create() {

  };

  find() {
    return this.products;
  };

  findOne(id) {
    return this.products.find(item => item.id === id);
  };

  update() {

  };

  delete() {

  };

};

module.exports = ProductsService;
