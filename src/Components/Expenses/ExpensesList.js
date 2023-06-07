import React from "react";

import ExpenseItem from "./ExpenseItem";
import styles from './ExpensesList.module.css';

const ExpensesList = (props) =>{
    if(props.items.length===0){
        return <h2 className={styles["expenses-List__notfound"]}> Found no expenses.</h2>;
    }

    return(
        <ul className={styles["expenses-List"]}>
            {props.items.map((expenses) => (
              <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
              />
            ))}
        </ul>
    )
  
}

export default ExpensesList;