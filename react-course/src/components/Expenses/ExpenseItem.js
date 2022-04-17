//react just lets us import the css this way from the looks of things pre easy and nice
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import { useState } from "react";
//Uppercase each component as if it is a function
//a component in react is just a javascript function that returns jsx code
//it is common practice to split components into small functions that only contain what they need to
//common practice to name the component the same as the file name

//props is the properties that is given to the component through the attributes in the html like code <ExpenseItem title={javascriptvariable}
function ExpenseItem(props) {
  //useState will return the object and then the function for setting that object as it is const
  // const [title, setTitle] = useState(props.title);

  // function clickHandler()
  // {
  //   //setTitle will basically flag the variable / component to be updated in the dom so it actually updates what is rendered
  //   setTitle("New Title");
  //   //title will still show the old title as setTitle will flag the component to be updated not do it straight away
  //   console.log(title);
  // }

  //return a single div component use return (everything) so it is all returned
  return (
    //the reason its classname and not class is because class is a reserved keyword in javascript
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
//dont call the () otherwise im pretty sure javascript will just run the function because its retarded.
export default ExpenseItem;

// {/* //This is just a javascript expression, so we can display a variable but also do 1 + 1 and it will display 2 and etc */}
//       {/* { 1 + 1} */}
