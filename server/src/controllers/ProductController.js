import productResponse from '../../dummy_data/products.json';
/**
 *
 */
class ProductController {
  /**
   *  view all products
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns an object
   */
  static viewProducts(req, res) {
    return res.json({ data: productResponse, message: 'product found!!!' });
  }

  /**
   *  get a particular product
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns an object
   */
  static getProductId(req, res) {
    const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));

    if (!prodFind) {
      return res.status(404).json({ status: 404, error: 'product not found' });
    }
    return res.json({ data: prodFind });
  }

  /**
   *  add a product
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns an object
   */
  static addProduct(req, res) {
    const product = {
      id: productResponse.length + 1,
      name: req.body.name
    };

    productResponse.push(product);

    return res.json({
      data: product,
      message: 'Product added successfully'

    });
  }

  /**
   * updates products
   * @param {Object} req
   * @param {Object} res
   *@return {Object} returns an object
   */
  static updateProduct(req, res) {
    const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));

    if (!prodFind) {
      return res.status(404).json({ status: 404, message: 'product not found' });
    }

    prodFind.name = req.body.name;

    return res.json({ data: prodFind, message: 'product updated' });
  }

  /**
   * deletes a product
   * @param {Object} req
   * @param {Object} res
   *
   * @return {Object} returns an object
   */
  static deleteProduct(req, res) {
    const prodFind = productResponse.find(c => c.id === parseInt(req.params.productId, 10));
    if (!prodFind) {
      return res.status(404).json({ status: 404, error: 'product not found' });
    }

    const findIndex = productResponse.indexOf(prodFind);
    productResponse.splice(findIndex, 1);

    return res.json({ data: prodFind, message: 'product was deleted' });
  }
}

export default ProductController;
