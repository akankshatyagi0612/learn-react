import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    
    return (
    <div className='expense-item'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <ExpenseDate date={props.date}/>
        <div className='expense-item_description'>
        <h2>{props.title}</h2>
        </div>
        </div>
        <div className='expense-item_price'>${props.amount}</div>
    </div>
    );
}

export default ExpenseItem;