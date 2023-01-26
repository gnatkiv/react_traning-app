
import React, {useState} from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [nameInput, setNameInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    const nameChangeHandler = (e) => {
        setNameInput(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDateInput(e.target.value)
    }

    const amountChangeHandler = (e) => {
       setAmountInput(e.target.value);
    }

    const sumbitHandler = (e) => {
        e.preventDefault();
  
        const inputData = {
            description: nameInput,
            amount: amountInput,
            date: new Date(dateInput)
        }

        props.onSaveCostData(inputData);
        setAmountInput('');
        setDateInput('');
        setNameInput('');
    }

    return ( 
        <form onSubmit={sumbitHandler} >
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label htmlFor="">Name</label>
                    <input onChange={nameChangeHandler} value={nameInput} type="text" />
                </div>
            </div>

            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label htmlFor="">Sum</label>
                    <input onChange={amountChangeHandler} value={amountInput} type="number" min='0.1' step='0.1'/>
                </div>
            </div>

            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label htmlFor="">Date</label>
                    <input onChange={dateChangeHandler} value={dateInput} type="date" min="2019-01-01" step='2024-06-12' />
                </div>
            </div>

            <div className="new-cost__actions">
                <button type='submit'>ADD</button>
                <button type='button' onClick={props.onCancel}>DELETE</button>

            </div>
        </form>
    )
}

export default CostForm;