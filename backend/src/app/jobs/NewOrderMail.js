import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { orderInfo } = data;

    await Mail.sendMail({
      to: `${orderInfo.deliveryman.name} <${orderInfo.deliveryman.email}>`,
      subject: 'Nova encomenda disponível',
      template: 'newOrder',
      context: {
        deliveryman: orderInfo.deliveryman,
        product: orderInfo.product,
        recipient: orderInfo.recipient,
      },
    });
  }
}

export default new NewOrderMail();
