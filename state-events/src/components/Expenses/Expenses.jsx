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
    // // console.log(expense.date);
    // // console.log("FILTER: " + filteredYear);
    // console.log("FILTER: " + typeof filteredYear);
    // // console.log("PROPS: " + expense.date.getFullYear());
    // console.log("PROPS: " + typeof expense.date.getFullYear().toString());

    return expense.date.getFullYear().toString() === filteredYear; // They should be equal as Type AND Value
  });
  // console.log(filteredByYearExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        seleceted={filteredYear}
        onChangeFilter={onChnageFilterHandler}
      />
      {filteredByYearExpenses.map((expense, index) => (
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
