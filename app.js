import React from 'react';
import './App.css';
import ExpenseItem from './ExpenseItem'; // Import ExpenseItem component

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 2, 28),
      locationOfExpenditure: 'Grocery Store'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 2, 29),
      locationOfExpenditure: 'Electronics Store'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 30),
      locationOfExpenditure: 'Insurance Company'
    },
    // Add more expense objects here...
  ];

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
