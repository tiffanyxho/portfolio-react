import React from 'react';
import logo from './logo.svg';
import './App.css';
import Base from './components/base/base';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Header />
      <Base />

      {/* Load React. Note: when deploying, replace "development.js" with "production.min.js". */}
      <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

      {/* Load our React component. */}
      <script src="like_button.js"></script>
    </div>
  );
}

export default App;
