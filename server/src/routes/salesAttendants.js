import express from 'express';
import SalesAttendantController from '../controllers/salesAttendantsController';

const attendantRouter = express.Router();

attendantRouter.get('/', SalesAttendantController.viewSalesAttendants);

attendantRouter.get('/:attendantId', SalesAttendantController.getSalesAttendantId);

attendantRouter.post('/', SalesAttendantController.addSalesAttendants);

attendantRouter.put('/:attendantId', SalesAttendantController.updateSalesAttendant);

attendantRouter.delete('/:attendantId', SalesAttendantController.deleteSalesAttendant);


export default attendantRouter;
