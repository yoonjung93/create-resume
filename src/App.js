import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="Header-left">
          <div>left</div>
        </div>
        <div className="Header-center">
          <div><a className="App-menu" href="/create" rel="noopener noreferrer">Create</a></div>
          <div><a className="App-menu" href="/design" rel="noopener noreferrer">Design</a></div>
          <div><a className="App-menu" href="/view" rel="noopener noreferrer">View</a></div>
          <div><a className="App-menu" href="/apply" rel="noopener noreferrer">Apply</a></div>
        </div>
        <div className="Header-right">
          <div>right</div>
        </div>
      </header>
      <body className="App-body">
        <code>src/App.js</code>
      </body>
      <footer className="App-footer">
        <div>Yoonjung Park</div>
        <div>Email: cute7483@gmail.com</div>
        <div>
          <a
            className="App-link"
            href="https://yoonjung93.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Information
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
