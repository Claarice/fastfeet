import { Op } from 'sequelize';
import Order from '../models/Order';

class StartController {
  async update(req, res) {
    const { orderId } = req.params;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    if (order.start_date !== null) {
      return res.status(401).json({ error: 'Start date has already been set' });
    }

    const start = new Date();
    const end = new Date();
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 0, 0, 0);

    const countOrders = await Order.findAndCountAll({
      where: {
        start_date: {
          [Op.between]: [start, end],
        },
      },
    });

    if (countOrders.count >= 5) {
      return res
        .status(401)
        .json({ error: 'Limit of 5 orders has been reached' });
    }

    order.start_date = new Date();
    order.save();

    return res.json(order);
  }
}

export default new StartController();
