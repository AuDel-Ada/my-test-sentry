import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://sentry.io/organizations/palo-it-px/projects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This one will be use for Sentry !
        </a>
      </header>
    </div>
  );
}

export default App;
