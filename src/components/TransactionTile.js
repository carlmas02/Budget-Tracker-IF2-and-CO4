const TransactionTile = (props) => {
  return (
    <div>
      <h3>Rs {props.transaction.amount}/- </h3>

      <p>{props.transaction.category}</p>
      <button onClick={()=>{props.editTransacation(props.id)}}>Edit</button>
      <button
        onClick={() => {
          props.deleteTransaction(props.id);
        }}
      >
        Delete{" "}
      </button>
    </div>
  );
};

export default TransactionTile;
