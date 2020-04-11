import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import { Container, Cell, Head, CellHeader, Row, TableWrapper } from './styles';

export default function Teste() {
  return (
    <>
      <Container>
        <TableWrapper>
          <Head>
            <TableRow>
              <CellHeader>Order</CellHeader>
              <CellHeader>Order</CellHeader>
              <CellHeader>Order</CellHeader>
              <CellHeader>Order</CellHeader>
              <CellHeader>Order</CellHeader>
            </TableRow>
          </Head>
          <TableBody>
            <Row tableRow>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
            </Row>
            <Row>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
            </Row>
            <Row>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
              <Cell>Order</Cell>
            </Row>
          </TableBody>
        </TableWrapper>
      </Container>
    </>
  );
}
