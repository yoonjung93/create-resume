import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <a
            className="App-link"
            href="/create"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create
          </a>
        </div>
        <div>
          <a
            className="App-link"
            href="/design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design
          </a>
        </div>
        <div>
          <a
            className="App-link"
            href="/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <div>
          <a
            className="App-link"
            href="/apply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </div>
      </header>
      <body className="App-body">
        <code>src/App.js</code>
      </body>
      <footer className="App-footer">
        <div>Yoonjung Park</div>
        <div>email: cute7483@gmail.com</div>
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
