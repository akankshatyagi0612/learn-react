import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import Button from "../Button";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    const startEditingHandler =()=> {
      setIsEditing(true);
    };

    const stopEditingHandler =()=> {
      setIsEditing(false);
    };

  return (
    <div className="new-expense">
      {!isEditing && (
        <Button
        type="submit"
        label="Add New Expense"
        // className={styles['expense-item_price']}
        onClick={startEditingHandler}
      />
      )}
      {isEditing && (
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
