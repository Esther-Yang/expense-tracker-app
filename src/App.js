import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Story book",
    amount: 39.99,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Laptop", amount: 5990.9, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Mechanical keyboard",
    amount: 290.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Table",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
