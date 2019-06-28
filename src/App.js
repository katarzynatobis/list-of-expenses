import React from 'react';
import './App.css';
import { AddExpanse } from './components/addExpanse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of expenses</h1>
        <p>1EUR = 4,382 PLN</p>
      </header>
      <main>
        <AddExpanse onAddExpanse={console.log}/>
      </main>
    </div>
  );
}

export default App;
