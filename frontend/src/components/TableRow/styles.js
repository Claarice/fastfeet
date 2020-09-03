import styled from 'styled-components';

export const Container = styled.div`
  display: table-row;
  width: 100%;

  &::after {
    padding: 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 80px;
  border-radius: 4px;

  div:first-child {
    border-radius: 4px 0 0 4px;
  }
`;
