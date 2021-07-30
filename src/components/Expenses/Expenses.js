import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => { // filter method returns a brand new array based on true or false
        return expense.date.getFullYear().toString() === filteredYear; // return true if the year stored in date = filtered year, false otherwise

    });

  

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList item={filteredExpenses}></ExpensesList>
                {/* <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date} >
                </ExpenseItem>

                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date} >
                </ExpenseItem>

                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date} >
                </ExpenseItem>

                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date} >
                </ExpenseItem> */}

            </Card>
        </div>
    )
}



export default Expenses;