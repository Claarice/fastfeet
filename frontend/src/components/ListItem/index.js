import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdCreate,
  MdDeleteForever,
  MdVisibility,
} from 'react-icons/md';

import {
  Container,
  TableRow,
  TableCell,
  ShowActions,
  ActionBox,
  EditAction,
  OpenModal,
  Actions,
  StatusCell,
} from './styles';

import ViewRecord from '~/components/ViewRecord';
import CircledAvatar from '~/components/CircledAvatar';

export default function ListItem() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function showModal() {
    setShow(true);
  }

  function handleCloseModal() {
    setShow(false);
  }

  return (
    <>
      <Container>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>
            <CircledAvatar /> Order
          </TableCell>
          <TableCell>
            <StatusCell color="#2CA42B">
              <span>&#9679;</span> ENTREGUE
            </StatusCell>
          </TableCell>
          <TableCell>Lorem ipsum dolor sit amet. </TableCell>
          <TableCell>
            <ShowActions onClick={handleToggleVisible}>
              <Actions>
                <ActionBox visible={visible}>
                  <EditAction>
                    <OpenModal onClick={showModal}>
                      <MdVisibility size={20} color="#8E5BE8" />
                      <span>Visualizar</span>
                    </OpenModal>
                  </EditAction>
                  <hr />
                  <EditAction>
                    <Link to="/edit">
                      <MdCreate size={20} color="#4D85EE" />
                      <span>Editar</span>
                    </Link>
                  </EditAction>
                  <hr />
                  <EditAction>
                    <Link to="/delete">
                      <MdDeleteForever size={20} color="#DE3B3B" />
                      <span>Excluir</span>
                    </Link>
                  </EditAction>
                </ActionBox>
              </Actions>

              <MdMoreHoriz size={24} color="#C6C6C6" />
            </ShowActions>
          </TableCell>
        </TableRow>
      </Container>
      <ViewRecord show={show} onShowChange={handleCloseModal} />
    </>
  );
}
