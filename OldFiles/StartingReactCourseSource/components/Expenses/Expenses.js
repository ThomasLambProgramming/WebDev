import "./Expenses.css";
import "./ExpenseItem";
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";


import { useState } from "react";

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState("2022");

  const onYearChangeHandler = (newYear) => {
    setCurrentYear(newYear);
  };

  const filteredContent = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={currentYear}
          onYearChange={onYearChangeHandler}
        />
        <ExpensesChart expenses={filteredContent} />
        <ExpensesList filteredExpenses={filteredContent}/>
      </div>
    </Card>
  );
}

export default Expenses;
