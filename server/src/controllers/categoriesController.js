import categoryResponse from '../../dummy_data/category.json';
/**
 *_
 */
class CategoriesController {
  /**
     * view all categories
     * @param {object} req
     * @param {object} res
     * @return {object} returns an object
     */
  static viewCategories(req, res) {
    res.json({ data: categoryResponse, message: 'categories found!!!' });
  }

  /**
 * get a particular category
 * @param {object} req
 * @param {object} res
 * @return {object} returns an object
 */
  static getCategoryId(req, res) {
    const catFind = categoryResponse.find(c => c.id === parseInt(req.params.categoryId, 10));

    if (!catFind) {
      return res.status(404).json({ status: 404, error: 'category not found' });
    }
    return res.json({ data: catFind });
  }

  /**
 *
 * @param {object} req
 * @param {object} res
 * @return {object} returns an object
 */
  static addCategory(req, res) {
    const category = {
      id: categoryResponse.length + 1,
      name: req.body.name
    };

    categoryResponse.push(category);

    return res.json({
      data: category,
      message: 'category added successfully'
    });
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} retruns an object
   */
  static updateCategory(req, res) {
    const catFind = categoryResponse.find(c => c.id === parseInt(req.params.categoryId, 10));

    if (!catFind) {
      return res.status(404).json({ status: 404, message: 'category not found' });
    }

    catFind.name = req.body.name;
    return res.json({
      data: catFind,
      message: 'category added successfully'

    });
  }

  /**
 *
 * @param {object} req
 * @param {object} res
 *
 * @return {object} returns an object
 */
  static deleteCategory(req, res) {
    const catFind = categoryResponse.find(c => c.id === parseInt(req.params.categoryId, 10));

    if (!catFind) {
      return res.status(404).json({ status: 404, message: 'category does not exist' });
    }

    const findIndex = categoryResponse.indexOf(catFind);
    categoryResponse.splice(findIndex, 1);

    return res.json({ data: findIndex, message: 'category was deleted' });
  }
}

export default CategoriesController;
