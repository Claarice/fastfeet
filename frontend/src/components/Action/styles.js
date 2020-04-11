import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ActionBox = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none !important')};
  flex-direction: column;
  width: 150px;
  left: calc(100% - 97px);
  top: calc(100% + 10px);
  background: #ffffff;
  padding: 5px 0;
  box-shadow: 0px 0px 2px #00000026;
  margin: 10px;
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
