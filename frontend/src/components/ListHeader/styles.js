import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: table-header-group;
  flex-direction: column;
`;

export const PageTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 0;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  margin: 5px 80px;
  padding: 10px 10px;

  input {
    font-weight: 500;
    color: #999999;
    border: 0px;
    padding: 0 5px;
  }
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: #7d40e7;
  color: #fff;
  margin: 5px 80px;
  border: 1px solid #7d40e7;
  border-radius: 4px;
  padding: 10px 15px;

  span {
    padding: 2px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px 80px;
`;

export const CellHeader = styled.div`
  width: 100%;
  text-align: left;

  font-size: 16px;
  font-weight: 700;
  color: #444444;
  padding: 10px 10px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #444444;
  text-align: left;
  margin: 30px 80px;
`;
