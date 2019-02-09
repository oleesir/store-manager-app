import salesResponse from '../../dummy_data/sales.json';
/**
 *
 */
class SalesController {
  /**
     *
     * @param {object} req
     * @param {object} res
     * @return {object} returns an object
     */
  static viewSales(req, res) {
    return res.json({ data: salesResponse, message: 'view all sales' });
  }

  /**
 *
 * @param {object} req
 * @param {object} res
 * @return {object} returns an object
 */
  static getSaleId(req, res) {
    const saleFind = salesResponse.find(c => c.id === parseInt(req.params.salesId, 10));

    if (!saleFind) {
      return res.status(404).json({ status: 404, error: 'sales info not found' });
    }
    return res.json({ data: saleFind });
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} returns an object
   */
  static addSales(req, res) {
    const sales = {
      id: salesResponse.length + 1,
      name: req.body.name
    };

    salesResponse.push(sales);

    return res.json({
      data: sales,
      message: 'sales successfully added'
    });
  }

  /**
 *
 * @param {object} req
 * @param {object} res
 * @return {object} returns an object
 */
  static updateSales(req, res) {
    const saleFind = salesResponse.find(c => c.id === parseInt(req.params.salesId, 10));

    if (!saleFind) {
      return res.status(404).json({ status: 404, error: 'item not found' });
    }

    saleFind.name = req.body.name;

    return res.json({ data: saleFind, message: 'sales updated' });
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} returns an object
   */
  static deleteSales(req, res) {
    const saleFind = salesResponse.find(c => c.id === parseInt(req.params.salesId, 10));

    if (!saleFind) {
      return res.status(404).json({ data: 404, error: 'item not found' });
    }

    const findIndex = salesResponse.indexOf(saleFind);
    salesResponse.splice(findIndex, 1);

    return res.json({ data: saleFind, message: 'sales was deleted' });
  }
}

export default SalesController;
