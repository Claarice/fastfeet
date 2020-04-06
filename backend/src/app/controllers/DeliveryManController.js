import * as Yup from 'yup';
import { Op } from 'sequelize';
import DeliveryMan from '../models/DeliveryMan';
import File from '../models/File';

class DeliveryManController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { email } = req.body;

    const deliveryman = await DeliveryMan.findOne({ where: { email } });

    if (deliveryman && deliveryman.deleted === false) {
      return res.status(401).json({ error: 'Delivery Man already exists' });
    }

    const { id, name } = await DeliveryMan.create(req.body);

    const { avatar } = await DeliveryMan.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, name, email, avatar });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { id } = req.params;

    const deliveryMan = await DeliveryMan.findByPk(id);

    if (!deliveryMan || (deliveryMan && deliveryMan.deleted === true)) {
      return res.status(401).json({ error: 'Delivery Man not found' });
    }

    const { email } = req.body;

    if (email !== deliveryMan.email) {
      const deliveryManExists = await DeliveryMan.findOne({ where: { email } });

      if (deliveryManExists) {
        return res.status(401).json({ error: 'Delivery Man already exists' });
      }
    }

    await DeliveryMan.update(req.body, { where: { id } });

    const { name, avatar } = await DeliveryMan.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async index(req, res) {
    const { page = 1, q } = req.query;

    const deliveryMen = await DeliveryMan.findAll({
      where: {
        deleted: false,
        name: {
          [Op.like]: `%${q || ''}%`,
        },
      },
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(deliveryMen);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryMan = await DeliveryMan.findByPk(id);

    if (!deliveryMan) {
      return res.status(401).json({ error: 'Delivery Man not found' });
    }

    if (deliveryMan.deleted) {
      return res.status(401).json({ error: 'Entry has already been deleted' });
    }

    const { deleted, deleted_at } = await DeliveryMan.update(
      { deleted: true, deleted_at: new Date() },
      { where: { id } }
    );

    return res.json({
      id,
      deleted,
      deleted_at,
    });
  }
}

export default new DeliveryManController();
