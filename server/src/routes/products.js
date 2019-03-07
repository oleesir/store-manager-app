import express from 'express';

import ProductController from '../controllers/ProductController';

const productRouter = express.Router();

productRouter.get('/', ProductController.viewAllProducts);

productRouter.get('/:productId', ProductController.getProduct);

productRouter.post('/', ProductController.addProduct);

productRouter.put('/:productId', ProductController.updateProduct);

productRouter.delete('/:productId', ProductController.deleteProduct);


export default productRouter;
