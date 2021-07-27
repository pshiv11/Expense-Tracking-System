import React, {useState} from 'react';
import'./ExpenseForm.css';

function ExpenseForm(){

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle : " ",
    //         enteredAmount : " ",
    //         enteredDate : " "
    //     }
    //  );

    function titleChangeHandler(event){

        setEnteredTitle(event.target.value);

        // /******one way  *****
        //   setUserInput(
        //     {
        //         ...userInput, //old values
        //         enteredTitle :event.target.value,  //updated

        //         // enteredAmount : " ", //copied old values
        //         // enteredDate : " " // copied old values
        //     }
        //   ); 

        // /****another way *****/
        //     setUserInput((prevState) => {
        //         /**we take a snapshot of the previous state and return a new state*/
        //         return {...prevState, enteredTitle : event.target.value};

        //     }
        //     )

    }

    function amountChangeHandler(event){

        // setUserInput(
        //     {
        //         ...userInput, //old values
        //         enteredAmount :event.target.value,  //updated
        //     }    
        //   );  

        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
        // setUserInput(
        //     {
        //         ...userInput, //old values
        //         enteredDate :event.target.value,  //updated
               
        //     }
        //   );  
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){

        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return(

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input 
                        type='text'
                        value={enteredTitle} 
                        onChange={titleChangeHandler}>

                    </input>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount} 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler}>
                    </input>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        value={enteredDate} 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        onChange={dateChangeHandler}>
                    </input>
                </div>

            </div>

            <div className ='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
            
        </form>

    )

}


export default ExpenseForm;