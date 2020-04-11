import React from 'react';
import PropTypes from 'prop-types';

import { Container, CellTitle } from './styles';

export default function CellHeader(props) {
  const { children, action } = props;
  return (
    <Container>
      <CellTitle action={action}>{children}</CellTitle>
    </Container>
  );
}

CellHeader.propTypes = {
  children: PropTypes.element.isRequired,
  action: PropTypes.bool,
};

CellHeader.defaultProps = {
  action: false,
};
