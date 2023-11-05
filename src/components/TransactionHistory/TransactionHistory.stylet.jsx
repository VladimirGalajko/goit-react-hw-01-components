import styled from 'styled-components';

const TableTranHistory = styled.table`
  margin: 0 auto;
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  width: 25%;
  box-shadow: 
  1px 1px 1px rgb(186, 190, 204),
  -1px -1px 1px rgb(255, 255, 255);
  margin-bottom: 50px;
`;

const Thead = styled.thead`
  background-color: #72c6ec;
  &:hover {
    background-color: #2490c2;
  }
`;
const Tbody = styled.tbody`
  &:nth-child(even) {
    background-color: #ddecf3;
  }
  &:hover {
    background-color: #a3a5b1;
  }
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;


export { Thead, TableTranHistory, Th, Td, Tbody };

