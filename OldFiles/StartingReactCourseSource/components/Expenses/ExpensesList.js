import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          //Key is important to render dynamic lists without updating the whole list, try to not use index from map
          //this is done so that react knows the order and the difference between list items so it basically does well this is key 1 changing
          //but since key 2 is not being affected then we dont want to change that this key can be put on any component including html
          key={expense.id}
          //key needs any primitive

          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};


export default ExpensesList