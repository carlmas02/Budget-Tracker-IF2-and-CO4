import { useState } from "react";

const InputBox = (props) => {
  const [count, setCount] = useState(0);

  const performTask = () => {
    setCount(count + 1);
  };

  const handleInput = (event) => {
    console.log("User is typing", event);
    props.setAmount(event.target.value);
    console.log(props.amount);
  };

  const handleSubmit = () => {
    const tempObj = {
      amount: props.amount,
      category: props.category,
    };

    const newTransactions = [...props.transactions, tempObj];
    props.setTransactions(newTransactions);
  };

  return (
    <div className="">
      <h1>Budget Tracker</h1>
      <input placeholder="Enter an amount" onChange={handleInput} />
      <p></p>
      <input
        type="radio"
        name="category"
        onClick={() => {
          props.setCategory("expense");
          console.log(props.category);
        }}
      />{" "}
      <label>Expense</label>
      <br />
      <input
        type="radio"
        name="category"
        onClick={() => {
          props.setCategory("saving");
          console.log(props.category);
        }}
      />{" "}
      <label>Saving</label>
      <p></p>
      <button onClick={handleSubmit}>Submit</button>
      {/* <h1>{count}</h1>
      <button onClick={performTask}>Increment</button> */}
    </div>
  );
};

export default InputBox;
