import express from 'express';

import SalesController from '../controllers/salesController';

const salesRouter = express.Router();

salesRouter.get('/sales', SalesController.viewSales);


salesRouter.get('/:salesId', SalesController.getSaleId);


salesRouter.post('/sales', SalesController.addSales);


salesRouter.put('/:salesId', SalesController.updateSales);


salesRouter.delete('/:salesId', SalesController.deleteSales);


export default salesRouter;
