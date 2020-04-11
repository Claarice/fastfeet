import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from './styles';

export default function TableRow({ children }) {
  return (
    <>
      <Container>
        <Row>{children}</Row>
      </Container>
    </>
  );
}

TableRow.propTypes = {
  children: PropTypes.element.isRequired,
};
