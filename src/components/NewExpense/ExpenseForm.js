import React, {useState} from 'react';
import'./ExpenseForm.css';

function ExpenseForm(){

    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");

    const [userInput, setUserInput] = useState(
        {
            enteredTitle : " ",
            enteredAmount : " ",
            enteredDate : " "
        }
    );

    function titleChangeHandler(event){
          setUserInput(
            {
                ...userInput, //old values
                enteredTitle :event.target.value,  //updated
                // enteredAmount : " ", //copied old values
                // enteredDate : " " // copied old values
            }
          );  
    }

    function amountChangeHandler(event){

        setUserInput(
            {
                ...userInput, //old values
                enteredAmount :event.target.value,  //updated
            }    
          );  
    }

    function dateChangeHandler(event){
        setUserInput(
            {
                ...userInput, //old values
                enteredDate :event.target.value,  //updated
               
            }
          );  

    }


    return(

        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>

            </div>

            <div className ='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>

    )

}


export default ExpenseForm;