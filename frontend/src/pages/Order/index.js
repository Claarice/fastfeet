import React, { useState, useEffect } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import ListHeader from '~/components/ListHeader';
import TableRow from '~/components/TableRow';
import TableCell from '~/components/TableCell';
import CellHeader from '~/components/CellHeader';
import Action from '~/components/Action';
import CircledAvatar from '~/components/CircledAvatar';
import StatusCell from '~/components/StatusCell';

import { Container, TableRowGroup } from './styles';

import api from '~/services/api';

export default function Order() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/orders');
      console.log(response.data);
      setData(response.data);
    }
    fetchOrders();
  }, []);

  return (
    <Container>
      <ListHeader>
        <CellHeader>ID</CellHeader>
        <CellHeader>Destinatário</CellHeader>
        <CellHeader>Entregador</CellHeader>
        <CellHeader>Produto</CellHeader>
        <CellHeader>Status</CellHeader>
        <CellHeader action>Ações</CellHeader>
      </ListHeader>
      <TableRowGroup>
        {data.map(order => (
          <TableRow key={order.id}>
            <TableCell small>#{order.id}</TableCell>
            <TableCell>{order.recipient.name}</TableCell>
            <TableCell>
              <CircledAvatar>{order.deliveryman.name}</CircledAvatar>
              {order.deliveryman.name}
            </TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>
              <StatusCell>{order.status}</StatusCell>
            </TableCell>
            <TableCell action>
              <MdMoreHoriz
                size={24}
                color="#C6C6C6"
                onClick={handleToggleVisible}
              />
              <Action visible={visible} />
            </TableCell>
          </TableRow>
        ))}
      </TableRowGroup>
    </Container>
  );
}
