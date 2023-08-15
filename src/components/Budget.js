import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, expenses, currency } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    useEffect(() => {
        if (editableBudget < totalExpenses) {
            setErrorMessage('Budget cannot be less than total expenses');
        } else {
            setErrorMessage('');
        }
    }, [editableBudget, totalExpenses]);

    const handleInputChange = (event) => {
        const newBudget = parseInt(event.target.value);

        if (newBudget >= totalExpenses && newBudget <= 20000) {
            setErrorMessage('');
            setEditableBudget(newBudget);
        } else if (newBudget < totalExpenses) {
            setErrorMessage('Budget cannot be less than total expenses');
        } else {
            setErrorMessage('Budget cannot exceed 20,000');
        }
    };

    const handleIncrease = () => {
        const newBudget = editableBudget + 10;
        if (newBudget <= 20000) {
            setErrorMessage('');
            setEditableBudget(newBudget);
        } else {
            setErrorMessage('Budget cannot exceed 20,000');
        }
    };

    const handleDecrease = () => {
        const newBudget = editableBudget - 10;
        if (newBudget >= totalExpenses) {
            setErrorMessage('');
            setEditableBudget(newBudget);
        } else {
            setErrorMessage('Budget cannot be less than total expenses');
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: <span>{currency}</span>
                <input
                    type="number"
                    value={editableBudget}
                    onChange={handleInputChange}
                />
            </span>
            <div className="button-column">
                <button className="small-button" onClick={handleIncrease}>&uarr;</button>
                <button className="small-button" onClick={handleDecrease}>&darr;</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Budget;
