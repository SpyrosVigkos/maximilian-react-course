import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChnageFilterHandler = (selecetedValue) => {
    // console.log(selecetedValue);
    setFilteredYear(selecetedValue);
  };

  const filteredByYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; // They should be equal as Type AND Value
  });

  //Conditional Content

  let expensesContent = <p>No expenses found.</p>;

  if (filteredByYearExpenses.length > 0) {
    expensesContent = filteredByYearExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        seleceted={filteredYear}
        onChangeFilter={onChnageFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
