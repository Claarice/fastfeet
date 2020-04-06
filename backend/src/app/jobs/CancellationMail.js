import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { deliveryProblem, canceledOrder } = data;

    console.log(deliveryProblem);

    await Mail.sendMail({
      to: `${canceledOrder.deliveryman.name} <${canceledOrder.deliveryman.email}>`,
      subject: 'Encomenda cancelada',
      template: 'Cancellation',
      context: {
        deliveryman: canceledOrder.deliveryman,
        product: canceledOrder.product,
        problem: deliveryProblem,
        cancellation_date: format(
          parseISO(canceledOrder.canceled_at),
          "dd 'de' MMMM', às ' H:mm'h'",
          { locale: pt }
        ),
      },
    });
  }
}

export default new CancellationMail();
