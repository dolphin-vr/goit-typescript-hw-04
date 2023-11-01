import React from 'react';
import logo from './logo.svg';
import './App.css';
import RequestComponent from './homework/2';
import { FormComponent } from './homework/3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank"
          rel="noopener noreferrer">Learn React</a>
      </header>
      <RequestComponent />
      <FormComponent />
    </div>
  );
}

export default App;
