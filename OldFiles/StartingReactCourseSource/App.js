import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const logExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    //react allows only one root component eg div and etc otherwise it will not accept it. (cause that isnt really a single component then)
    <div>
      <NewExpense onAddExpense={logExpense} />
      {/* REACT WILL LOOK FOR CUSTOM COMPONENTS WHEN IT STARTS WITH A CAPITAL THATS WHY WE CAPITALISE IT
      LOWERCASE WILL BE READ AS HTML BECAUSE HTML IS ALL LOWERCASE eg. div, h1 etc */}
      <Expenses expenses={expenses} expenseAmount={4} />
    </div>
  );
};

export default App;
