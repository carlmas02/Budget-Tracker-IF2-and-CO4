import { useState } from "react";
import InputBox from "./InputBox";
import TransactionTile from "./TransactionTile";

const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [transactions, setTransactions] = useState([
    {
      amount: 200,
      category: "Saving",
    },
    {
      amount: 300,
      category: "Saving",
    },
  ]);

  const editTransacation = (id) => {
    const newAmount = prompt("please enter the updated value ");

    const newTransactions = transactions.map((value, index) => {
      if (index === id) {
        return {
          ...value,
          amount: newAmount,
        };
      } else {
        return value;
      }
    });

    setTransactions(newTransactions);
  };
  const deleteTransaction = (id) => {
    console.log(id);
    const newTransactions = transactions.filter((value, index) => {
      if (index === id) {
        return false;
      } else {
        return true;
      }
    });

    setTransactions(newTransactions);
  };

  const display = (transac, id) => {
    return (
      <TransactionTile
        transaction={transac}
        id={id}
        editTransacation={editTransacation}
        deleteTransaction={deleteTransaction}
      />
    );
  };

  return (
    <div>
      <InputBox
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      {transactions.map(display)}
    </div>
  );
};

export default Home;
