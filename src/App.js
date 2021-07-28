import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { title: "Toilet Paper", amount: 300, date: new Date(2021, 2, 15) },
  { title: "Car Insurance", amount: 200, date: new Date(2021, 3, 28) },
  { title: "New TV", amount: 500, date: new Date(2021, 4, 20) },
  { title: "Desk", amount: 150, date: new Date(2021, 5, 11) }
];


function App() {

 const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense){
    setExpenses( (prevExpenses) => {
      return[expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
} 

export default App;
