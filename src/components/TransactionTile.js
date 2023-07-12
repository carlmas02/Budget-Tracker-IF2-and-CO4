const TransactionTile = (props) => {
  return (
    <div>
      <h3>Rs {props.transaction.amount}/- </h3>

      <p>{props.transaction.category}</p>
      <button>Edit</button>
      <button>Delete </button>
    </div>
  );
};

export default TransactionTile;
