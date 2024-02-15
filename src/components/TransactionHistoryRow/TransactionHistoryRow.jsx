import css from './TransactionHistoryRow.module.css';

export const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </>
  );
};

export default TransactionHistoryRow;
