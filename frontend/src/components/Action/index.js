import React from 'react';

import { Link } from 'react-router-dom';

import { MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, ActionBox, EditAction } from './styles';

export default function Action() {
  return (
    <Container>
      <ActionBox visible={false}>
        <EditAction>
          <MdCreate size={20} color="#4D85EE" />
          <Link to="/edit">Editar</Link>
        </EditAction>
        <hr />
        <EditAction>
          <MdDeleteForever size={20} color="#DE3B3B" />
          <Link to="/delete">Excluir</Link>
        </EditAction>
      </ActionBox>
    </Container>
  );
}
