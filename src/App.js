import React from 'react';
import logo from './logo.svg';
import frontBack from './back_front.jpg'
import './App.css';
import './Bem.css';
import 'puc-shared-components-menu/MenuVertical';
import 'puc-shared-components-menu/MenuHorizontal';
import MenuVertical from './components/menu/MenuVertical'
import MenuHorizontal from './components/menu/MenuHorizontal'

function App() {
  return (
      <div className="div-center">
        {/* Esses menus são as importações realizadas do NPM. */}
          <menu-vertical/>
          <menu-horizontal/>
        {/* Esses menus são os componentes locais. Descomentar para funcionar. */}
        {/* <MenuVertical/>
        <MenuHorizontal/> */}
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
