const InputBox = () => {
  return (
    <div className="">
      <h1>Budget Tracker</h1>
      <input placeholder="Enter an amount" />
      <p></p>
      <input type="radio" name="category" /> <label>Expense</label>
      <br />
      <input type="radio" name="category" /> <saving>Saving</saving>
      <p></p>
      <button>Submit</button>
    </div>
  );
};

export default InputBox;
