import { Op } from 'sequelize';
import Order from '../models/Order';
import DeliveryMan from '../models/DeliveryMan';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryController {
  async index(req, res) {
    const { deliveryManId } = req.params;
    const { page = 1 } = req.query;

    const deliveryMan = await DeliveryMan.findByPk(deliveryManId);

    if (!deliveryMan) {
      return res.status(401).json({ error: 'Delivery Man not found' });
    }

    const deliveries = await Order.findAll({
      where: {
        end_date: {
          [Op.not]: null,
        },
        deliveryman_id: deliveryManId,
        canceled: false,
      },
      attributes: ['id', 'start_date', 'end_date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'signature',
          attibutes: ['id', 'path', 'url'],
        },
      ],
    });
    /*
    const filteredDeliveries = deliveries.filter(
      item => item.canceled_at === null
    );
*/
    return res.json(deliveries);
  }
}

export default new DeliveryController();
