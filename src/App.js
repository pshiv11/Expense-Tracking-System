import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';


function App() {

  const expenses = [
    { title: "Toilet Paper", amount: 300, date: new Date(2021, 2, 15) },
    { title: "Car Insurance", amount: 200, date: new Date(2021, 3, 28) },
    { title: "New TV", amount: 500, date: new Date(2021, 4, 20) },
    { title: "Desk", amount: 150, date: new Date(2021, 5, 11) }
  ];


  return (
    <div className="App">
      <h2>Expense Tracking System</h2>
      <Expenses expenses = {expenses}></Expenses>

    </div>
  );
}

export default App;
