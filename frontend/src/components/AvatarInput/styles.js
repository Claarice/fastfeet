import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }
  }
`;

export const PhotoPlaceHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px dashed #dddddd;
  background: #ffffff;

  justify-content: center;

  span {
    color: #dddddd;
  }
`;

export const PhotoInput = styled.div`
  display: none;
  img {
    width: 150px;
    height: 150px;
    border: 3px dashed #dddddd;
    border-radius: 50%;
    background: #ffffff;
  }
`;
