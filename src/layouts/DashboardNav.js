import React from 'react';
import {Nav, NavDropdown } from 'react-bootstrap';
import './style.css';

function DefaultNav() {
  return (
    <React.Fragment>
        <Nav className="flex-column" style={{ backgroundColor: "#027F71", color:"black", maxHeight:"100%"}} fixed lg="12">
            <Nav.Link style={{ color: "black", marginTop:"3em", marginLeft: "1.5em"}}><i className="bi bi-house-door-fill"/> &nbsp; Active</Nav.Link>
            <Nav.Link style={{ color: "black", marginLeft: "1.5em"}}><i className="bi bi-briefcase-fill"></i> &nbsp; Master Data Management</Nav.Link>
        </Nav>
    </React.Fragment>
  );
}

export default DefaultNav;