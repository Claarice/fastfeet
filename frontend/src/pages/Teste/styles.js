import styled, { css } from 'styled-components';
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

export const Container = styled(TableContainer)`
  width: auto !important;
  margin: 80px !important;
`;

export const TableWrapper = styled(Table)``;

export const Cell = styled(TableCell)`
  background-color: #fff !important;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 50px !important;
`;

export const CellHeader = styled(TableCell)`
  text-align: left;

  font-size: 16px;
  font-weight: 700;
  color: #444444;
  padding: 10px 10px;
`;

export const Head = styled(TableHead)``;

export const Row = styled(TableRow)`
  ${props =>
    props.TableRow &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 4px !important;
      border-collapse: separate;
      border-spacing: 0 50px !important;
    `}
`;
