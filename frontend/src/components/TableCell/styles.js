import styled, { css } from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;

  &::after {
    padding: 80px;
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: ${props =>
    props.action ? 'right !important' : 'left !important'};

  ${props =>
    props.action &&
    css`
      border-radius: 0 4px 4px 0;
      display: flex;
      justify-content: flex-end;
    `}

  background-color: #fff;
  color: #666666;
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid #fff;
`;

export const StatusCell = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #2ca42b !important;
  font-weight: 700;
  background: ${lighten(0.5, '#2ca42b')};
  border-radius: 12px;
  padding: 7px 7px;
  height: 30px;
  span {
    width: 10px;
    height: 10px;
    margin-right: 3px;
  }
`;
