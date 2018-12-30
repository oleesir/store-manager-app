import express from 'express';
import categoryResponse from '../dummy_data/category.json';

const categoryRouter = express.Router();

categoryRouter.get('/categories', (req, res) => {
  res.json({ data: categoryResponse, message: 'category found!!!' });
});

categoryRouter.get('/:categoryId', (req, res) => {
  const categoryFind = categoryResponse.find(c => c.id === parseInt(req.params.categoryId, 10));
  if (!categoryResponse) {
    return res.status(404).json({ status: 404, error: 'categoryid not found' });
  }
  return res.json({ data: categoryFind, message: 'category found' });
});

categoryRouter.post('/categories', (req, res) => {
  const category = {
    id: categoryResponse.length + 1,
    name: req.body.name
  };
  categoryResponse.push(category);
  return res.json({
    data: category,
    message: 'a new category was added'
  });
});

categoryRouter.put('/:categoryId', (req, res) => {
  const categoryFind = categoryResponse.find(c => c.id === parseInt(req.params.categoryId, 10));
  if (!categoryFind) {
    return res.status(404).json({ status: 404, message: 'category updated' });
  }
  res.send(categoryFind);

  categoryFind.name = req.body.name;
  return res.json({
    data: categoryFind,
    message: 'successfully added'
  });
});

categoryRouter.delete('/:categoryId', (req, res) => {
  const categoryFind = categoryResponse.find(c => c.id === parseInt(req.params.salesId, 10));
  if (!categoryFind) {
    return res.status(404).json({ status: 404, message: 'category not found' });
  }
  const findIndex = categoryResponse.indexOf(categoryFind);
  categoryResponse.splice(findIndex, 1);
  return res.json({
    data: categoryFind, message: 'category deleted'
  });
});

export default categoryRouter;
