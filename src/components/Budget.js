import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const min = 1;
    // const max = 20000;

    const handleChange = event => {
        // const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(event.target.value);
        if (value > 20000) {
            alert("The value cannot exceed remaining funds £"+remaining);
            setValue(20000);
        }
        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setValue(totalExpenses);
        }
      };

    const { budget, remaining, expenses } = useContext(AppContext);
    const [value, setValue] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type='number' value={value} onChange={handleChange} step={10}/></span>
        </div>
    );
};
export default Budget;