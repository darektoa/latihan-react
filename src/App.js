import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Abdul Fattah';
  const grade = "XI - RPL"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
        <p>{grade}</p>
      </header>
    </div>
  );
}



const AppVar = ()=>{
  const name = 'Abdul Fattah';
  const grade = "XI - RPL"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
        <p>{grade}</p>
      </header>
    </div>
  );
}



class AppClass extends React.Component {
  constructor(props){
    super(props);
    this.name = 'Abdul Fattah';
    this.grade = "XI - RPL"
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.name}</p>
          <p>{this.grade}</p>
        </header>
      </div>
    );
  }
}

export {
  App,
  AppVar,
  AppClass
};
