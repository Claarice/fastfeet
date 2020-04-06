import styled from 'styled-components';

export const NewRecordPage = styled.div`
  height: 500px;
  max-height: 800px;
  margin: 20px 200px;
`;

export const NewRecordHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const GroupButtons = styled.div`
  display: flex;
  flex-direction: row !important;
`;

export const NewRecordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: ${props => (props.type === 'save' ? '#7D40E7' : '#cccccc')};

  width: 112px;
  color: #fff;
  margin-left: 10px;
  border: 1px solid ${props => (props.type === 'save' ? '#7D40E7' : '#cccccc')};
  border-radius: 4px;
  padding: 10px 15px;

  span {
    padding: 2px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 600px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 30px;

  span {
    font-weight: 700;
    text-align: left;
    margin: 10px 0;
  }

  input {
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 45px;
    padding: 10px 20px;
  }
`;
