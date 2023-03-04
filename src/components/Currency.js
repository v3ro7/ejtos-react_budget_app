//import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    return (
        <div className='alert-secondary'>
        <Dropdown style={{width: '160px'}}>
            <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: '#93e499', width: '175px', border: '1px solid #eee', padding: '10px'}}>
                Currency (₹ Ruppee)
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor: '#93e499', border: '1px solid #000'}}>
                <Dropdown.Item href="#dollar">$ Dollar</Dropdown.Item>
                <Dropdown.Item href="#pound">£ Pound</Dropdown.Item>
                <Dropdown.Item href="#euro">€ Euro</Dropdown.Item>
                <Dropdown.Item href="#ruppee">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    );
};

export default Currency;

// onChange={event=>changeLocation(event.target.value)}

//     <div className='alert alert-secondary'> Currency {
    //   <select name="Currency" id="Currency" >
    //     <option defaultValue>(£ Pound)</option>
    //     <option value="$">($ Dollar)</option>
    //     <option value="£">(£ Pound)</option>
    //     <option value="€">(€ Euro)</option>
    //     <option value="₹">(₹ Ruppee)</option>
    //   </select>	
    //   }	
    // </div>