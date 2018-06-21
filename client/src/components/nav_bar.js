import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import InlineLogin from './inline_login';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  /**
   * You could rewrite toggle like this to escape the need to do manual .bind:
   * 
   * toggle = () => { 
   *   this.setState({...});
   * }
   * 
   * This will auto-bind toggle to current instance
   */

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let styles = {
      color: 'white'
    };
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Twitchthroe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={styles} tag={Link} to="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={styles} tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={styles} nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}