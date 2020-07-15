import React from 'react';
import logo from './logo.svg';
import frontBack from './back_front.jpg'
import './App.css';
import './Bem.css';

function App() {
  return (
      <div className="div-center">
          <ul className="menu-horizontal">
            <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="default.asp">Home</a></li>
            <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="news.asp">News</a></li>
            <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="contact.asp">Contact</a></li>
            <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="about.asp">About</a></li>
          </ul>
          <div className="abstract">
            <h1 className="abstract-title">Lucas Vinícius Machado</h1>
            <p className="abstract-p">
              Sou desenvolvedor de software back-end. Front-end é muito top, mas infelizente não nasci para isso. rsrsrs
              brincadeirinha. kkkk
            </p>
          </div>
          <div className="abstract">
            <div className="center">
              <img className="img-small" src={frontBack}></img>
            </div>
          </div>
      </div>
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!!!
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
      </header> */
  );
}

export default App;
