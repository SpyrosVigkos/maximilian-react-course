import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./EnxpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChnageFilterHandler = (selecetedValue) => {
    // console.log(selecetedValue);
    setFilteredYear(selecetedValue);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; // They should be equal as Type AND Value
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        seleceted={filteredYear}
        onChangeFilter={onChnageFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
