import "./Expenses.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;

  //using two way binding we can then after setting this, go into the filters to then update the filter so if
  //we want to start with a certain year and display it we can
  const [currentYear, setCurrentYear] = useState("2022");

  const onYearChangeHandler = (newYear) => {
    setCurrentYear(newYear);
  };

  return (
    /* We give the parameters to the component function through these attributes the naming of the attributes has to be 
            the same in the component (there might be ways around that with destructuring but that also seems messy) */

    <Card className="expenses">
      <div>
        <ExpensesFilter selected={currentYear} onYearChange={onYearChangeHandler} />
      </div>



      {props.expenses.map(expense => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
      
      {/* Expense 1-4
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
