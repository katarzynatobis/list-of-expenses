import React from "react";
import { ExpenseRow } from "./expenseRow";
import { observer } from "mobx-react";

export const ExpensesTable = observer(({ expensesList, deleteItem }) => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (PLN)</th>
          <th>Amount (EUR)</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {expensesList.map(item => (
          <ExpenseRow
            expenseItem={item}
            onDeleteItem={deleteItem}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
});
