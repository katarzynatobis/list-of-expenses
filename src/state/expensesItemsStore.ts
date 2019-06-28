import { observable, computed, action, decorate } from "mobx";
import ExpenseItem from "./expenseItemModel";

export class ExpensesItemsStore {
  expensesItems: Array<ExpenseItem> = [];

  get sumPln(): number {
    return this.expensesItems.reduce((sum, item) => sum + item.amountPln, 0);
  }

  get sumEur(): string {
    return (this.sumPln * 4.382).toFixed(2);
  }

  addItem = (title: string, amountPln: number) => {
    const item = new ExpenseItem(title, amountPln);
    this.expensesItems.push(item);
  };

  removeItem = (id: string) => {
    this.expensesItems = this.expensesItems.filter(item => item.id !== id);
  };

  static initStore(): ExpensesItemsStore {
    const store = new ExpensesItemsStore();
    const defaultItems = [
      { title: "Item 1", amountPln: 30.3 },
      { title: "Item 2", amountPln: 1214.15 }
    ];
    store.expensesItems = defaultItems.map(
      item => new ExpenseItem(item.title, item.amountPln)
    );
    return store;
  }
}

decorate(ExpensesItemsStore, {
  expensesItems: observable,
  sumEur: computed,
  sumPln: computed,
  removeItem: action,
  addItem: action
});
