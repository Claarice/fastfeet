import React, { useState, useEffect } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import ListItem from '~/components/ListItem';
import ListHeader from '~/components/ListHeader';
import TableRow from '~/components/TableRow';
import TableCell from '~/components/TableCell';
import CellHeader from '~/components/CellHeader';
import Action from '~/components/Action';
import CircledAvatar from '~/components/CircledAvatar';
import StatusCell from '~/components/StatusCell';

import { Container } from './styles';

import api from '~/services/api';

export default function Order() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    async function fetchOrders() {
      const { response } = await api.get('/orders');

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
      {data.map(order => (
        <TableRow>
          <TableCell>#{order.id}</TableCell>
          <TableCell>{order.recipient.name}</TableCell>
          <TableCell>
            <CircledAvatar>{order.deliveryman.name}</CircledAvatar>
            {order.deliveryman.name}
          </TableCell>
          <TableCell>{order.product}</TableCell>
          <TableCell>
            <StatusCell>ENTREGUE</StatusCell>
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
    </Container>
  );
}
