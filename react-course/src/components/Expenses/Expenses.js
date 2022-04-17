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

  const filteredContent = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === currentYear})

  //doing it this way is nicer, less horrid code in the return
  let expensesContent = <p>There is no content for this year</p>;

  if (filteredContent.length > 0){
      expensesContent = filteredContent.map((expense) => (
        <ExpenseItem
        //Key is important to render dynamic lists without updating the whole list, try to not use index from map
        //this is done so that react knows the order and the difference between list items so it basically does well this is key 1 changing
        //but since key 2 is not being affected then we dont want to change that this key can be put on any component including html
          key={expense.id}
          //key needs any primitive

          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))
        }
      

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={currentYear}
          onYearChange={onYearChangeHandler}
        />
        {expensesContent}
      </div>
    </Card>
  );
}

export default Expenses;
