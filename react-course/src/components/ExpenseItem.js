//react just lets us import the css this way from the looks of things pre easy and nice
import "./ExpenseItem.css"

//Uppercase each component as if it is a function
//a component in react is just a javascript function that returns jsx code
//it is common practice to split components into small functions that only contain what they need to
//common practice to name the component the same as the file name


//props is the properties that is given to the component through the attributes in the html like code <ExpenseItem title={javascriptvariable}
function ExpenseItem(props) {
  //we can also just place normal javascript inside this function as well
  // const expenseDate = new Date(2022, 2, 27);
  // const expenseTitle = "Car cost";
  // const expenseAmount = 500;

//return a single div component use return (everything) so it is all returned
  return (
    //the reason its classname and not class is because class is a reserved keyword in javascript
    <div className="expense-item">
      {/* Date has to be put into a string or it throws an error */}
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
//dont call the () otherwise im pretty sure javascript will just run the function because its retarded.
export default ExpenseItem;

// {/* //This is just a javascript expression, so we can display a variable but also do 1 + 1 and it will display 2 and etc */}
//       {/* { 1 + 1} */}
