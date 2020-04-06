import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  height: 64px;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;

    hr {
      color: #dddddd;
      border: 1px solid #dddddd;
      height: 80%;
      margin: 0 20px;
    }

    img {
      height: 50%;
      margin-right: 10px;
      margin-left: 10px;
    }

    a {
      font-size: 15px;
      font-weight: 700;
      color: #999999;
      padding: 0 10px;
      text-align: left;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    font-size: 14px;
    text-align: right;

    span {
      font-weight: 700;
      padding-bottom: 5px;
      color: #666666;
    }

    a {
      color: #de3b3b;
    }
  }
`;
