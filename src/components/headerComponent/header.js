import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">LOGO</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Products">Products</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Header;
