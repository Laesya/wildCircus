import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavbarCollapsed from '../navbar/Navbar';
import '../Style.scss';



export default class AccountPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarCollapsed/>
        <div className="AccountPage">
          <p>Accoutn</p>
        </div>
      </React.Fragment>
      
    );
  }
}

