import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { MdSearch, MdAdd } from 'react-icons/md';

import {
  Container,
  PageTop,
  SearchBox,
  ListButton,
  TableHeader,
  Title,
} from './styles';

import CellHeader from '~/components/CellHeader';

export default function ListHeader({ children }) {
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

      <TableHeader>{children}</TableHeader>
    </Container>
  );
}

ListHeader.propTypes = {
  children: PropTypes.element.isRequired,
};
