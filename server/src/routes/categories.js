import express from 'express';
import CategoriesController from '../controllers/categoriesController';

const categoryRouter = express.Router();

categoryRouter.get('/', CategoriesController.viewCategories);

categoryRouter.get('/:categoryId', CategoriesController.getCategoryId);

categoryRouter.post('/', CategoriesController.addCategory);

categoryRouter.put('/:categoryId', CategoriesController.updateCategory);

categoryRouter.delete('/:categoryId', CategoriesController.deleteCategory);

export default categoryRouter;
