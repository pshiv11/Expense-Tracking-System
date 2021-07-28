import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1', title: "Toilet Paper", amount: 300, date: new Date(2020, 2, 15) },
  {id:'e2', title: "Car Insurance", amount: 200, date: new Date(2021, 3, 28) },
  {id:'e3', title: "New TV", amount: 500, date: new Date(2020, 4, 20) },
  {id:'e4', title: "Desk", amount: 150, date: new Date(2022, 5, 11) }
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
