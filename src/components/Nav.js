import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">freeCodeCamp Votifier</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
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
              (isLoggedIn()) ? ( <NavDropdown title="User Name" id="nav-dropdown"><button className="btn btn-danger log btn-block" onClick={() => logout()}>Log out</button></NavDropdown> ) : ( <li className="login-btn-wrapper"><button className="btn btn-info log btn-block" onClick={() => login()}>Log In</button></li> )
            }
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;
