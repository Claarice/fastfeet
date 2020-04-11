import React from 'react';
import PropTypes from 'prop-types';

import { Status } from './styles';

export default function TableCell({ children }) {
  return (
    <>
      <Status color="#2CA42B">
        <span>&#9679;</span> {children}
      </Status>
    </>
  );
}

TableCell.propTypes = {
  children: PropTypes.element.isRequired,
};
