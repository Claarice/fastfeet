import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        canceled: Sequelize.BOOLEAN,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.canceled === true) {
              return 'CANCELADA';
            }
            if (this.start_date === null) {
              return 'PENDENTE';
            }
            if (this.end_date === null && this.start_date !== null) {
              return 'RETIRADA';
            }
            if (this.end_date !== null && this.start_date !== null) {
              return 'ENTREGUE';
            }
            return '';
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });
    this.belongsTo(models.DeliveryMan, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Order;
