import React from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
     
    return (
    <Card className={styles['expense-item']}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}} className='container'>
        <ExpenseDate date={props.date}/>
        <div className={styles['expense-item_description']}>
        <h2>{props.title}</h2>
        </div>
        </div>
        <div style={{display: 'flex'}}>
        <div className={styles['expense-item_price']}>${props.amount}</div>
        {/* <Button onClick={ClickHandler} label="Change Title" /> */}
        </div>
    </Card>
    );
}
 
export default ExpenseItem;