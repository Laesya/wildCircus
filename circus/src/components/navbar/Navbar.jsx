import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css"


export default class NavbarCollapsed extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    
    return (
      <div>
        <Navbar color="faded" light className="navbarCollapsed">
          <NavbarBrand href="/" className="TitleNavBar">Wild Circus</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="/shop">Shop</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/family">Wild Family</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Animals">Nos animaux</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/loginRegister">Inscription/connexion</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
    
  }
  
}

