import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2023, 3, 22),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 254.67,
    date: new Date(2021, 5, 17),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 345.67,
    date: new Date(2019, 3, 26),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 954,
    date: new Date(2020, 7, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
