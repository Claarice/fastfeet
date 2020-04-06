import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    span {
      font-size: 16px;
      font-weight: 700;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px dashed #dddddd;
      background: #ffffff;
    }

    input {
      display: none;
    }
  }
`;
