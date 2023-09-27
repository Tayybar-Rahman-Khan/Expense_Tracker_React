import React from "react";

function ExpenseItem(props) {
  return (
    <div>
      <h2>Expense Items</h2>
      <p>Date: {props.date.toISOString()}</p>
      <p>Title: {props.title}</p>
      <p>Amount: ${props.amount}</p>
      <p>Location: {props.locationOfExpenditure}</p>{" "}
      {/* Display LocationOfExpenditure */}
    </div>
  );
}

export default ExpenseItem;
