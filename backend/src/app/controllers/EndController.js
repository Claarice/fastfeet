import * as Yup from 'yup';
import Order from '../models/Order';

class EndController {
  async update(req, res) {
    const { orderId } = req.params;
    const { signature_id } = req.body;

    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    if (!order.start_date) {
      return res.status(401).json({ error: 'A start date must be set' });
    }

    await order.update({
      end_date: new Date(),
      signature_id,
    });

    return res.json(order);
  }
}

export default new EndController();
