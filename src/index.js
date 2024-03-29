import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import * as serviceWorker from "./serviceWorker";
import { ExpensesItemsStore } from "./state/expensesItemsStore.ts";

ReactDOM.render(
  <App store={ExpensesItemsStore.initStore()} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
