import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class Footer extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      // <div className="footer-bottom">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-xs-12">
      //         <p className="text-center">Built with love and coffee by Kris Koishigawa</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="footer">
        <div className="container">
          <p className="text-center text-muted">Built with love and coffee by Kris Koishigawa</p>
        </div>
      </div>
    );
  }
}

export default Footer;
