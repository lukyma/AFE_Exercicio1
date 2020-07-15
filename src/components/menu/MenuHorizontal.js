import React from 'react';
import './Menu.css';

class MenuHorizontal extends React.Component {
    render() {
      return <ul className="menu-horizontal">
                <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="default.asp">Home</a></li>
                <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="news.asp">News</a></li>
                <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="contact.asp">Contact</a></li>
                <li className="menu-horizontal-nav"><a className="menu-horizontal-nav-item" href="about.asp">About</a></li>
            </ul>;
    }
}

export default MenuHorizontal;
  