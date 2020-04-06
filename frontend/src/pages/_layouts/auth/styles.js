import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  max-width: 360px;
  text-align: left;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px;
    padding-bottom: 30px;

    img {
      width: auto;
      height: auto;
      margin: 40px 20px;
    }

    input {
      width: 100%;
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 0 15px;
      margin: 10px 0 15px 0;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      text-transform: uppercase;
      font-weight: 700;
      color: #444444;
    }

    button {
      width: 100%;
      height: 45px;
      border: 1px solid #7d40e7;
      background-color: #7d40e7;
      color: #fff;
      border-radius: 4px;
      font-weight: 700;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
