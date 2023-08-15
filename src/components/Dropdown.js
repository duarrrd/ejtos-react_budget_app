import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dropdown = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value); // Call setCurrency to update the currency
    };

    return (
        <div className={`alert alert-success`}>
            <label htmlFor="currency">Currency:</label>
            <select
                id="currency"
                value={currency}
                onChange={handleCurrencyChange}
                style={{ backgroundColor: 'lightgreen' }}
            >
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default Dropdown;
