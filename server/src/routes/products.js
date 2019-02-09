import express from 'express';

import ProductController from '../controllers/ProductController';

const productRouter = express.Router();

productRouter.get('/', ProductController.viewProducts);

productRouter.get('/:productId', ProductController.getProductId);

productRouter.post('/', ProductController.addProduct);

productRouter.put('/:productId', ProductController.updateProduct);

productRouter.delete('/:productId', ProductController.deleteProduct);


export default productRouter;
