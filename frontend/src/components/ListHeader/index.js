import React from 'react';

import { useHistory } from 'react-router-dom';

import { MdSearch, MdAdd } from 'react-icons/md';

import {
  Container,
  PageTop,
  SearchBox,
  ListButton,
  TableHeader,
  CellHeader,
  Title,
} from './styles';

export default function ListHeader() {
  const history = useHistory();

  return (
    <Container>
      <Title>Gerenciando entregadores</Title>
      <PageTop>
        <SearchBox>
          <MdSearch size={24} color="#999999" />
          <input placeholder="Buscar por entregadores" />
        </SearchBox>
        <ListButton
          onClick={() => {
            history.push('/order/new');
          }}
        >
          <MdAdd size={24} color="#fff" />
          <span>CADASTRAR</span>
        </ListButton>
      </PageTop>

      <TableHeader>
        <CellHeader>Título</CellHeader>
        <CellHeader>Título</CellHeader>
        <CellHeader>Título</CellHeader>
        <CellHeader>Título</CellHeader>
        <CellHeader>Ações</CellHeader>
      </TableHeader>
    </Container>
  );
}
