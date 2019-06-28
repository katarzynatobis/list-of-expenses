import React from "react";

export function ExpenseRow({ expenseItem, onDeleteItem }) {
  function deleteItem() {
    return onDeleteItem(expenseItem.id);
  };

  return (
    <tr>
      <td>{expenseItem.title}</td>
      <td>{expenseItem.amountPln}</td>
      <td>{expenseItem.amountEur}</td>
      <td>
        <button type="button" onClick={deleteItem}>
          Delete
        </button>
      </td>
    </tr>
  );
}
