import React from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';
import { Container, TableRow, TableCell } from './styles';
import Action from '../Action';

export default function ListItem({ children }) {
  return (
    <Container>
      <TableRow>
        <TableCell>Order</TableCell>
        <TableCell>Order</TableCell>
        <TableCell>Order</TableCell>
        <TableCell>Lorem ipsum dolor sit amet. </TableCell>
        <TableCell>
          <Action />
          <MdMoreHoriz size={24} color="#C6C6C6" />
        </TableCell>
      </TableRow>
    </Container>
  );
}

ListItem.propTypes = {
  children: PropTypes.element.isRequired,
};
