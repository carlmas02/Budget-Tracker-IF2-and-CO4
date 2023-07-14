import { useState } from "react";

const InputBox = (props) => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   // alert("Button is clicked");
  // };

  const handleInput = (event) => {
    // console.log("user is typing", event.target.value);
    props.setAmount(event.target.value);
    console.log(props.amount);
  };

  const handleExpense = () => {
    props.setCategory("Expense");
  };

  const handleSaving = () => {
    props.setCategory("Saving");
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
    <div className="input-style">
      <input onChange={handleInput} placeholder="Enter an amount" />
      <br />
      <input type="radio" name="category" onClick={handleExpense} />
      <label>Expense</label>
      <br />
      <input type="radio" name="category" onClick={handleSaving} />
      <label>Saving</label>

      <p></p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputBox;
