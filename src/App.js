import React from "react";
import "./App.css";
import { AddExpanse } from "./components/addExpanse";
import { ExpensesTable } from "./components/expensesTable";
import { observer } from "mobx-react-lite";

export const App = observer(({ store }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of expenses</h1>
        <p>1EUR = 4,382 PLN</p>
      </header>
      <main>
        <AddExpanse onAddExpanse={store.addItem} />
        <ExpensesTable store={store}/>
        <p>
          Sum: {store.sumPln} PLN ({store.sumEur} EUR)
        </p>
      </main>
    </div>
  );
});

export default App;
