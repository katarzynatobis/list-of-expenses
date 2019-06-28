import React from "react";
import { ExpenseRow } from "./expenseRow";
import { observer } from "mobx-react";

export const ExpensesTable = observer(({ store }) => {
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
        {store.expensesItems.map(item => (
          <ExpenseRow
            expenseItem={item}
            onDeleteItem={store.removeItem}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
});
