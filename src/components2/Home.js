import InputBox from "./InputBox";
import TransactionTile from "./TransactionTile";
import { useState } from "react";

const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [transactions, setTransactions] = useState([
    { amount: 200, category: "Expense" },
    { amount: 150, category: "Saving" },
    { amount: 300, category: "Saving" },
  ]);

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter((item, index) => {
      if (index === id) {
        return false;
      } else {
        return true;
      }
    });

    setTransactions(newTransactions);
  };

  // const transactions = [
  //   { amount: 200, category: "Expense" },
  //   { amount: 300, category: "Saving" },
  // ];

  const display = (transac, id) => {
    return (
      <TransactionTile
        transaction={transac}
        id={id}
        deleteTransaction={deleteTransaction}
      />
    );
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <InputBox
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {transactions.map(display)}
      {/* <TransactionTile transaction={200} />
      <TransactionTile transaction={300} />
      <TransactionTile transaction={300} /> */}
    </div>
  );
};

export default Home;
