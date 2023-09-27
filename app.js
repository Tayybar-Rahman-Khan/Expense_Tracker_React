import React from "react";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 2, 28),
      locationOfExpenditure: "Grocery Store", // Add LocationOfExpenditure
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 2, 29),
      locationOfExpenditure: "Electronics Store", // Add LocationOfExpenditure
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 30),
      locationOfExpenditure: "Insurance Company", // Add LocationOfExpenditure
    },
  ];

  return <div>{/* Your ExpenseItem components rendering */}</div>;
}

export default App;
