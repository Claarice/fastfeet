import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => (props.show ? 'flex' : 'none')};
  padding: 100px 35%;
  position: fixed;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const ViewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 25px;
  border-radius: 4px;
  text-align: left;

  background-color: #ffffff;
  filter: drop-shadow(0 0px 10px #00000033);

  span {
    padding: 5px 0;
    color: #666666;
    font-size: 16px;
    font-weight: 500;
  }

  img {
    width: 230px;
    margin: 20px 100px;
  }

  hr {
    border: 1px solid #eeeeee;
    margin: 3px;
  }
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  padding: 5px 0;
  color: #444444;
`;

export const InfoContent = styled.div``;

export const DatesLabel = styled.span`
  font-weight: 700;
`;
