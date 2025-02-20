import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>₹{props.cost}</td>
            <td><button className='btn' onClick={event=> increaseAllocation(props.name)}><FaPlusCircle size='2em' style={{color: 'green'}}/></button></td>
            <td><button className='btn' onClick={event=> decreaseAllocation(props.name)}><FaMinusCircle size='2em' style={{color: 'red'}}/></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;