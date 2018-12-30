import express from 'express';
import salesResponse from '../dummy_data/sales.json';

const salesRouter = express.Router();

salesRouter.get('/sales', (req, res) => {
  res.json({ data: salesResponse, message: 'sales found!!!' });
});


salesRouter.get('/:salesId', (req, res) => {
  const saleFind = salesResponse.find(c => c.id === req.params.salesId);
  if (!saleFind) {
    return res.status(404).json({ status: 404, error: 'sales not found' });
  }

  return res.json({ data: saleFind });
});


salesRouter.post('/sales', (req, res) => {
  const sale = {
    id: salesResponse.length + 1,
    name: req.body.name
  };
  salesResponse.push(sale);
  return res.json({
    data: sale,
    message: 'sale added successfully'
  });
});


salesRouter.put('/:salesId', (req, res) => {
  const saleFind = salesResponse.find(c => c.id === parseInt(req.params.salesId, 10));
  if (!saleFind) {
    return res.status(404).json({ status: 404, error: 'item not found' });
  }
  res.send(saleFind);

  saleFind.name = req.body.name;
  return res.json({
    data: saleFind,
    message: 'successfully added'
  });
});


salesRouter.delete('/:salesId', (req, res) => {
  const saleFind = salesResponse.find(c => c.id === parseInt(req.params.salesId, 10));
  if (!saleFind) {
    return res.status(404).json({ status: 404, message: 'sales not found' });
  }
  const findIndex = salesResponse.indexOf(saleFind);
  salesResponse.splice(findIndex, 1);
  return res.json({
    data: saleFind, message: 'sales order deleted'
  });
});

export default salesRouter;
