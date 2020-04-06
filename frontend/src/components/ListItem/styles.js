import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  &::after {
    padding: 80px;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 80px;

  div:first-child {
    border-radius: 4px 0 0 4px;
  }

  div:last-child {
    border-radius: 0 4px 4px 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const TableCell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  background-color: #fff;
  color: #666666;
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid #fff;
`;
