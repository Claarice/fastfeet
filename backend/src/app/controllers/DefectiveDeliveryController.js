import { Op } from 'sequelize';
import Order from '../models/Order';
import DeliveryMan from '../models/DeliveryMan';
import Recipient from '../models/Recipient';
import DeliveryProblem from '../schemas/DeliveryProblem';

class DefectiveDeliveryController {
  async index(req, res) {
    const deliveryProblem = await DeliveryProblem.find(
      {},
      { _id: 0, delivery_id: 1 }
    );

    let deliveries = deliveryProblem.map(item => item.delivery_id);

    deliveries = [...new Set(deliveries)];

    const ordersWithProblems = await Order.findAll({
      where: {
        id: {
          [Op.in]: deliveries,
        },
      },
      include: [
        {
          model: DeliveryMan,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'zipcode'],
        },
      ],
    });

    return res.json(ordersWithProblems);
  }
}

export default new DefectiveDeliveryController();
