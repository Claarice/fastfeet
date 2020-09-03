import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: table-row;
`;

export const CellTitle = styled.div`
  text-align: ${props =>
    props.action ? 'right !important' : 'left !important'};

  font-size: 16px;
  font-weight: 700;
  color: #444444;
  padding: 10px 10px;
`;
