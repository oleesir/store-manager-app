import express from 'express';
import attendantResponse from '../dummy_data/salesAttend.json';

const attendantRouter = express.Router();

attendantRouter.get('/attendants', (req, res) => {
  res.json({ data: attendantResponse, message: 'attendant found!!!' });
});

attendantRouter.get('/:attendantId', (req, res) => {
  const categoryFind = attendantResponse.find(c => c.id === parseInt(req.params.attendantId, 10));
  if (!attendantResponse) {
    return res.status(404).json({ status: 404, error: 'categoryid not found' });
  }
  return res.json({ data: categoryFind, message: 'category found' });
});

attendantRouter.post('/attendants', (req, res) => {
  const attendant = {
    id: attendantResponse.length + 1,
    name: req.body.name
  };
  attendantResponse.push(attendant);
  return res.json({
    data: attendant,
    message: 'a new attendant was added'
  });
});

attendantRouter.put('/:attendantId', (req, res) => {
  const attendantFind = attendantResponse.find(c => c.id === parseInt(req.params.attendantId, 10));
  if (!attendantFind) {
    return res.status(404).json({ status: 404, message: 'category updated' });
  }
  res.json({ data: attendantFind, message: 'attendant updated!!!' });

  attendantFind.name = req.body.name;
  return res.json({
    data: attendantFind,
    message: 'successfully added'
  });
});

attendantRouter.delete('/:attendantId', (req, res) => {
  const attendantFind = attendantResponse.find(c => c.id === parseInt(req.params.attendantId, 10));
  if (!attendantFind) {
    return res.status(404).json({ status: 404, message: 'attendant not found' });
  }
  const findIndex = attendantResponse.indexOf(attendantFind);
  attendantResponse.splice(findIndex, 1);
  return res.json({
    data: attendantFind, message: 'attendant deleted'
  });
});

export default attendantRouter;
