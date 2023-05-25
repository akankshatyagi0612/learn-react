import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    // let title= props.title;

    const ClickHandler = () =>{
        setTitle('Updated!');
        console.log(title);
    }
     
    return (
    <Card className='expense-item'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <ExpenseDate date={props.date}/>
        <div className='expense-item_description'>
        <h2>{title}</h2>
        </div>
        </div>
        <div style={{display: 'flex'}}>
        <div className='expense-item_price'>${props.amount}</div>
        <button onClick={ClickHandler}>Change Title</button></div>
    </Card>
    );
}

export default ExpenseItem;