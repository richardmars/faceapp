import React from 'react';
import { Image, Container, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class AppNavbar extends React.Component {
    render() {
        return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">GO FUN</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><Link to = "/app">Home</Link></NavItem>
        <NavItem eventKey={2}><Link to = "/history">History</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Help</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        )
    }
}

export default AppNavbar;
