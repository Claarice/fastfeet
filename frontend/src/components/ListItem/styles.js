import styled from 'styled-components';

import { lighten } from 'polished';

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
  align-items: center;

  background-color: #fff;
  color: #666666;
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid #fff;
`;

export const ShowActions = styled.button`
  background: none;
  border: 0;
`;

export const Actions = styled.div`
  position: relative;
`;

export const ActionBox = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none !important')};
  flex-direction: column;
  width: 150px;
  left: calc(50% - 83px);
  top: calc(50% + 40px);
  background: #ffffff;
  box-shadow: 0px 0px 2px #00000026;
  margin: 5px;
  border-radius: 4px !important;
  text-align: left;

  hr {
    color: #ffffff;
    border: 1px solid #eeeeee;
    margin: 0 5px;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    top: -9px;
    width: 0;
    height: 0;
    filter: drop-shadow(0 -3px 2px rgba(0, 0, 0, 0.2));
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 9px solid #ffffff;
  }
`;

export const EditAction = styled.div`
  margin: 5px 15px;
  justify-content: flex-start !important;

  span {
    margin-left: 3px;
  }

  a {
    font-size: 16px;
    font-weight: 500;
    color: #999999;
    margin-left: 3px;
    padding: 4px;
  }
`;

export const OpenModal = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: 500;
  color: #999999;
  margin-left: 3px;
  padding: 4px;
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
