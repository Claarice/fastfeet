import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Status } from './styles';

export default function TableCell({ children }) {
  const [color, setColor] = useState('');
  useEffect(() => {
    if (children === 'PENDENTE') {
      setColor('#C1BC35');
    } else if (children === 'RETIRADA') {
      setColor('#4D85EE');
    } else if (children === 'CANCELADA') {
      setColor('#DE3B3B');
    } else if (children === 'ENTREGUE') {
      setColor('#2CA42B');
    }
  }, []);

  return (
    <>
      <Status color={color}>
        <span>&#9679;</span> {children}
      </Status>
    </>
  );
}

TableCell.propTypes = {
  children: PropTypes.element.isRequired,
};
