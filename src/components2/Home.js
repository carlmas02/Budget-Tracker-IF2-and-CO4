import InputBox from "./InputBox";
import TransactionTile from "./TransactionTile";

const Home = () => {
  const transactions = [200, 300, 4000];

  const display = (transac) => {
    return <TransactionTile transaction={transac} />;
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <InputBox />
      {transactions.map(display)}
      {/* <TransactionTile transaction={200} />
      <TransactionTile transaction={300} />
      <TransactionTile transaction={300} /> */}
    </div>
  );
};

export default Home;
