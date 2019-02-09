import express from 'express';
import SalesattendController from '../controllers/salesattendController';

const attendantRouter = express.Router();

attendantRouter.get('/attendants', SalesattendController.viewSalesAttend);

attendantRouter.get('/:attendantId', SalesattendController.getSalesAttendId);

attendantRouter.post('/attendants', SalesattendController.addSalesAttend);

attendantRouter.put('/:attendantId', SalesattendController.addSalesAttend);

attendantRouter.delete('/:attendantId', SalesattendController.deleteSalesAttend);


export default attendantRouter;
