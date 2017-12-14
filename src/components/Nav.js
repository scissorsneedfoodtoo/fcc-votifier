import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, render } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">freeCodeCamp Votifier</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/special">My Polls</Link> :  ''
            }

          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/special">New Poll</Link> :  ''
            }

          </li>
          {
            (isLoggedIn()) ? ( <NavDropdown title="User Name" id="nav-dropdown"><button className="btn btn-danger log btn-block" onClick={() => logout()}>Log out</button></NavDropdown> ) : ( <li><button className="btn btn-info log" onClick={() => login()}>Log In</button></li> )
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
