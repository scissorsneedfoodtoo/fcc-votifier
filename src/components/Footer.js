import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class Footer extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <div className="footer">
        <div className="container-fluid">
          <span className="text-center text-muted">Built with love and coffee by Kris Koishigawa</span>
        </div>
      </div>
    );
  }
}

export default Footer;
