import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
//In functional components (non class ones that just return jsx or simple stuff with only a props input)
//can have this function syntax or just regular syntax with function NewExpense(){} it doesnt matter
//it only matters when then using state components that use the extends react.component
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* We split this out so that the components remain clean */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
