import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

    //We have it be empty so then it can be set to later since the form initially can be nothing.
    //Usestate can be called multiple times however they will all be seperate from eachother and be outside the lifecycle of this component (just to keep in mind for other stuff)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //INPUT HTML VALUE WILL ALWAYS BE A STRING, NUMBERS DATES AND ETC ARE RETURNED AS A STRING (thats why the states all start with a string)

    //Store an object as the state is also valid to be done so that all of the variables needed for this one component is managed by one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    // const exampleChangeHandler = (event) => {
    //     //this way we are actually just using the spread operator on the current userinput to set everything and copy it over then overwriting the varibale that we need to change.
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value;
    //     })


        //THE BETTER WAY TO SET THE OBJECT VALUES

        // Since react doesnt do the useState update right away giving it a function instead is better
        // react will autogive the current state as the parameter so then the function takes the current state, we take all the parts and update what we need and give it the return
        // this is done so if multiple setuserinputs is done at once we arent getting all weird values from that and it being all weird with values but this way we always get and set
        // the latest version of state (nevermind why he valled it prev state in the lecture that is just throwing me off)
        // setUserInput((prevState) => {return {prevState..., enteredTitle : event.target.value}});


    // }


    //Event can be done the same as how you get the event object in javascript with the addeventlistener, the event can be auto given one with the onchange in jsx
    //so we can get the value and etc.
    //jsx turns the onchange = the add eventlistener
    //Example = document.getElementById("idname").addEventListener('click', (event) => {})
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault(); //This stops the page from reloading (default javascript stuff here)
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //So a process of twowaybinding is done with the value of the input html field so that when we submit the input we gave is then deleted and reset without needing
        //to reload the page with the auto submission stuff.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpenseData(expenseData);
    }

    return (
        //onsubmit is an inbult thing that whenever the form is submitted in any way (not just onenter or onclick) it will run the event
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;