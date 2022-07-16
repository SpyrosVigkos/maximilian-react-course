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
  // console.log(filteredYear);
  return (
    <Card className="expenses">
      <ExpensesFilter
        seleceted={filteredYear}
        onChangeFilter={onChnageFilterHandler}
      />
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
