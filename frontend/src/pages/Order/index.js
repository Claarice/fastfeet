import React from 'react';

import ListItem from '../../components/ListItem';
import ListHeader from '../../components/ListHeader';

import { Container } from './styles';

export default function Order() {
  return (
    <Container>
      <ListHeader />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
}
