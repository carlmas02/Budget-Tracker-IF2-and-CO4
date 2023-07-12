import InputBox from "./InputBox";
import TransactionTile from "./TransactionTile";

const Home = () => {
  const transactions = [
    {
      amount: 100,
      category: "Expense",
    },
    {
      amount: 300,
      category: "Saving",
    },
    {
      amount: 400,
      category: "Expense",
    },
  ];

  const display = (transac) => {
    return <TransactionTile transaction={transac} />;
  };

  return (
    <div>
      <InputBox />

      {transactions.map(display)}
    </div>
  );
};

export default Home;
