import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import { useState } from "react";

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState("2022");
  const onYearChangeHandler = (newYear) => {
    setCurrentYear(newYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={currentYear}
          onYearChange={onYearChangeHandler}
        />
      </div>

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
