import express from 'express';
import productResponse from '../dummy_data/products.json';

const productRouter = express.Router();


productRouter.get('/', (req, res) => {
  res.json({ data: productResponse, message: 'product found!!!' });
});

productRouter.get('/:productId', (req, res) => {
  const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));
  if (!prodFind) {
    return res.status(404).json({ status: 404, error: 'product not found' });
  }
  return res.json({ data: prodFind });
});

productRouter.post('/', (req, res) => {
  const product = {
    id: productResponse.length + 1,
    name: req.body.name
  };
  productResponse.push(product);
  return res.json({
    data: product,
    message: 'Product added successfully'
  });
});

productRouter.put('/:productId', (req, res) => {
  const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));
  if (!prodFind) {
    return res.status(404).json({ status: 404, error: 'the item you are looking for does not exist' });
  }

  prodFind.name = req.body.name;
  return res.json({ data: prodFind, message: 'product updated!!!' });
});

productRouter.delete('/:productId', (req, res) => {
  const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));
  if (!prodFind) {
    return res.status(404).json({ status: 404, message: 'category updated' });
  }

  const findIndex = productResponse.indexOf(prodFind);
  productResponse.splice(findIndex, 1);

  res.json({ data: prodFind, message: 'product was deleted' });
});


export default productRouter;
