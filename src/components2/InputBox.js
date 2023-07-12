const InputBox = () => {
  return (
    <div className="input-style">
      <input placeholder="Enter an amount" />
      <br />
      <input type="radio" name="category" />
      <label>Expense</label>
      <br />
      <input type="radio" name="category" />
      <label>Saving</label>

      <p></p>
      <button>Submit</button>
    </div>
  );
};

export default InputBox;
