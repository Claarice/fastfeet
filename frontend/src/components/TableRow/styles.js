import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  &::after {
    padding: 80px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 80px;

  div:first-child {
    border-radius: 4px 0 0 4px;
  }
`;
