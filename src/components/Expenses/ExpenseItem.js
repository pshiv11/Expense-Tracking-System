import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {


    // const month = props.date.toLocaleString('en-US', { month: 'long'});
    // const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    // const year = props.date.getFullYear();

    const [title, setTitle] = useState(props.title);
  

    function clickHandler(){
        setTitle("updated ");

    }
    
    return (

        <Card className = 'expense-item'>

            <div> 
                <ExpenseDate date = {props.date}></ExpenseDate>

            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>

        </Card>

    );

}

export default ExpenseItem;