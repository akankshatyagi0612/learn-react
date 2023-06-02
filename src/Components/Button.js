import React from "react";
import styles from './Expenses/ExpenseItem.module.css';
// import styles from './Button.module.css';

const Button = (props) => {
  const { label, onClick, ...rest } = props;
  return (
    <button className={styles['expense-item_price']} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
