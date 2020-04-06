import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      additional_address_data: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { name, street, number, zipcode } = req.body;

    const recipient = await Recipient.findOne({
      where: { name, street, number, zipcode },
    });

    if (recipient) {
      return res.status(401).json({ error: 'Recipient already exists' });
    }

    const newRecipient = await Recipient.create(req.body);

    return res.json(newRecipient);
  }

  async update(req, res) {
    const { id } = req.params;

    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      additional_address_data: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found' });
    }

    const {
      name,
      street,
      additional_address_data,
      state,
      city,
      zipcode,
    } = req.body;

    await Recipient.update(req.body, {
      where: { id },
    });

    return res.json({
      id,
      name,
      street,
      additional_address_data,
      state,
      city,
      zipcode,
    });
  }

  async index(req, res) {
    const { page = 1, q } = req.query;

    const recipients = await Recipient.findAll({
      where: {
        name: { [Op.like]: `%${q || ''}%` },
      },
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(recipients);
  }
}

export default new RecipientController();
