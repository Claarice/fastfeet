import * as Yup from 'yup';
import { Op } from 'sequelize';
import { isBefore, isAfter } from 'date-fns';
import Order from '../models/Order';
import DeliveryMan from '../models/DeliveryMan';
import Recipient from '../models/Recipient';

import Queue from '../../lib/Queue';
import NewOrderMail from '../jobs/NewOrderMail';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const order = await Order.create(req.body, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'number',
            'additional_address_data',
            'state',
            'city',
            'zipcode',
          ],
        },
        {
          model: DeliveryMan,
          as: 'deliveryman',
        },
      ],
    });

    const orderInfo = await Order.findByPk(order.id, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'number',
            'additional_address_data',
            'state',
            'city',
            'zipcode',
          ],
        },
        {
          model: DeliveryMan,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    await Queue.add(NewOrderMail.key, {
      orderInfo,
    });

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;

    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
      signature_id: Yup.number(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { end_date } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    if (order.canceled) {
      return res.status(401).json({ error: 'Order has been deleted' });
    }

    if (order.start_date === null && typeof end_date !== 'undefined') {
      return res
        .status(401)
        .json({ error: 'Must set a start date before entering end date' });
    }

    const start = new Date();
    const end = new Date();
    start.setHours(8, 0, 0, 0);
    end.setHours(18, 0, 0, 0);

    const now = new Date();

    if (isBefore(now, start) || isAfter(now, end)) {
      return res
        .status(401)
        .json({ error: 'Operation not allowed out of business hours' });
    }

    await order.update(req.body);

    return res.json(order);
  }

  async index(req, res) {
    const { page = 1, q } = req.query;

    const order = await Order.findAll({
      where: {
        [Op.and]: [
          { canceled: false },
          { product: { [Op.like]: `%${q || ''}%` } },
        ],
      },
      attributes: [
        'id',
        'product',
        'canceled_at',
        'status',
        'start_date',
        'end_date',
      ],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: DeliveryMan,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(order);
  }

  async delete(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(401).json({ error: 'Order not found' });
    }

    if (order.canceled === true) {
      return res.status(401).json({ error: 'Order has already been canceled' });
    }

    order.canceled = true;
    order.canceled_at = new Date();

    await order.save();

    return res.json(order);
  }
}

export default new OrderController();
