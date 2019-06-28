import React from "react";
import ExpenseItem from "../state/expenseItemModel";

interface Props {
  expenseItem: ExpenseItem;
  onDeleteItem: (id: string) => void;
}

export const ExpenseRow: React.SFC<Props> = ({ expenseItem, onDeleteItem }) => {
  function deleteItem() {
    return onDeleteItem(expenseItem.id);
  }

  return (
    <tr>
      <td>{expenseItem.title}</td>
      <td>{expenseItem.amountPln}</td>
      <td>{expenseItem.amountEur}</td>
      <td>
        <button type="button" onClick={deleteItem} className={"delete-button"}>
          Delete
        </button>
      </td>
    </tr>
  );
}
