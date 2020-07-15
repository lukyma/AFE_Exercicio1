import React from 'react';
import './Menu.css';

class MenuVertical extends React.Component {
    render() {
      return <ul className="menu-vertical">
                <li className="menu-vertical-nav"><a className="menu-vertical-nav-item" href="default.asp">Home</a></li>
                <li className="menu-vertical-nav"><a className="menu-vertical-nav-item" href="news.asp">News</a></li>
                <li className="menu-vertical-nav"><a className="menu-vertical-nav-item" href="contact.asp">Contact</a></li>
                <li className="menu-vertical-nav"><a className="menu-vertical-nav-item" href="about.asp">About</a></li>
            </ul>;
    }
}

export default MenuVertical;