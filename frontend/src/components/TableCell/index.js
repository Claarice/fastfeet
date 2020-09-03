import React from 'react';
import PropTypes from 'prop-types';

import { Container, Cell } from './styles';

export default function TableCell({ children, action, small }) {
  return (
    <>
      <Container>
        <Cell small={small} action={action}>
          {children}
        </Cell>
      </Container>
    </>
  );
}

TableCell.propTypes = {
  children: PropTypes.element.isRequired,
  action: PropTypes.bool,
  small: PropTypes.bool,
};

TableCell.defaultProps = {
  action: false,
  small: false,
};
