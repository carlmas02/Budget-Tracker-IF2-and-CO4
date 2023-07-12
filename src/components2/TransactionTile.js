const TransactionTile = (props) => {
  return (
    <div>
      <h1>Rs {props.transaction}/-</h1>
      <p>Expense</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TransactionTile;
