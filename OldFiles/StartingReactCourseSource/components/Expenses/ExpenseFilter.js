import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const onYearChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onYearChangeHandler}>
          {/* Small note, using the props.selected will only update the default
            value when displaying if the props.selected is actually a valid option 
            makes sense but is also a lil annoying if you want the default to be something
            else */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
