import {
  TableTranHistory,
  Thead,
  Tbody,
  Th,
  Td,
} from './TransactionHistory.stylet';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TableTranHistory>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      {transactions.map(el => {
        return (
          <Tbody key={el.id}>
            <tr>
              <Td>{el.type}</Td>
              <Td>{el.amount}</Td>
              <Td>{el.currency}</Td>
            </tr>
          </Tbody>
        );
      })}
    </TableTranHistory>
  );
};
