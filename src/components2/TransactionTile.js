const TransactionTile = (props) => {
  return (
    <div>
      <h1>Rs {props.transaction.amount}/-</h1>
      <p>{props.transaction.category}</p>
      <button>Edit</button>
      <button onClick={() => props.deleteTransaction(props.id)}>Delete</button>
    </div>
  );
};

export default TransactionTile;
