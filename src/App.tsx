import React from "react";
import "./App.css";
import { ExpensesTable } from "./components/expensesTable";
import { observer } from "mobx-react-lite";
import { ExpensesItemsStore } from "./state/expensesItemsStore";
import { AddExpenseItem } from "./components/addItem";
import { Summary } from "./components/summary";

interface Props {
  store: ExpensesItemsStore;
}

export const App: React.SFC<Props> = observer(({ store }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of expenses</h1>
        <p>1EUR = 4,382 PLN</p>
      </header>
      <main>
        <AddExpenseItem onAddItem={store.addItem} />
        <ExpensesTable store={store} />
        <Summary sumEur={store.sumEur} sumPln={store.sumPln}/>
      </main>
    </div>
  );
});

export default App;
