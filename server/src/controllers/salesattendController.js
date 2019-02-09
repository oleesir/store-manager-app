import salesAttendResponse from '../../dummy_data/salesAttend.json';
/**
 *
 */
class SalesattendController {
  /**
     * view all attendants
     * @param {object} req
     * @param {object} res
     * @return {object} returns an object
     */
  static viewSalesAttend(req, res) {
    res.json({ data: salesAttendResponse, message: 'attendants found' });
  }

  /**
 * get a particular attendant
 * @param {object} req
 * @param {object} res
 * @return {object} returns an object
 */
  static getSalesAttendId(req, res) {
    const salesAttendFind = salesAttendResponse.find(c => c.id === parseInt(req.params.getSalesAttendId, 10));

    if (!salesAttendFind) {
      return res.status(404).json({ data: 404, error: 'Attentendant not found' });
    }
    return res.json({ data: salesAttendFind });
  }

  /**
   * adds new attendant
   * @param {object} req
   * @param {object} res
   * @return {object} returns an object
   */
  static addSalesAttend(req, res) {
    const attendant = {
      id: salesAttendResponse.length + 1,
      name: req.body.name
    };

    salesAttendResponse.push(attendant);

    return res.json({
      data: attendant,
      message: 'attendant added'
    });
  }

  /**
   *updates Attendant
   * @param {object} req
   * @param {object} res
   *@returns {object} returns an object
   */
  static updateSalesAttend(req, res) {
    const salesAttendFind = salesAttendResponse.find(c => c.id === parseInt(req.params.id, 10));

    if (!salesAttendFind) {
      res.status(404).json({ status: 404, error: 'attendant not found' });
    }
    salesAttendFind.name = req.body.name;

    return res.json({ data: salesAttendFind, message: 'Attendant updated' });
  }

  /**
   * deletes attendant
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an object
   */
  static deleteSalesAttend(req, res) {
    const salesAttendFind = salesAttendResponse.find(c => c.id === parseInt(req.params.id, 10));

    if (!salesAttendFind) {
      res.status(404).json({ status: 404, error: 'attendant not found' });
    }

    const findIndex = salesAttendResponse.indexOf(salesAttendFind);
    salesAttendFind.splice(findIndex, 1);

    return res.json({ data: salesAttendFind, message: 'Attendant was deleted' });
  }
}

export default SalesattendController;
