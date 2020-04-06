import * as Yup from 'yup';
import DeliveryProblem from '../schemas/DeliveryProblem';
import Order from '../models/Order';
import DeliveryMan from '../models/DeliveryMan';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async store(req, res) {
    const { orderId } = req.params;

    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { description } = req.body;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: orderId,
      description,
    });

    return res.json(deliveryProblem);
  }

  async index(req, res) {
    const { orderId } = req.params;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    const deliveryProblems = await DeliveryProblem.find({
      delivery_id: orderId,
    });

    return res.json(deliveryProblems);
  }

  async delete(req, res) {
    const { problemId } = req.params;

    const deliveryProblem = await DeliveryProblem.findById(problemId);

    if (!deliveryProblem) {
      return res.status(401).json({ error: 'Problem not found' });
    }

    const order = await Order.findByPk(deliveryProblem.delivery_id);

    if (!order) {
      return res.status(401).json({ error: 'ORder not found' });
    }

    if (order.canceled) {
      return res.status(401).json({ error: 'Order has already been canceled' });
    }

    order.canceled = true;
    order.canceled_at = new Date();

    await order.save();

    const canceledOrder = await Order.findByPk(deliveryProblem.delivery_id, {
      include: {
        model: DeliveryMan,
        as: 'deliveryman',
        attributes: ['id', 'name', 'email'],
      },
    });

    await Queue.add(CancellationMail.key, { deliveryProblem, canceledOrder });

    return res.json({ success: 'Order canceled' });
  }
}

export default new DeliveryProblemController();
