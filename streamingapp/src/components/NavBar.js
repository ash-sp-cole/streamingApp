import React, { Component } from 'react';
import {Navbar, Button, Form, FormControl, NavDropdown, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


class NavHeader extends Component {

state = {
  input: ''
}


eventChangeHandler = () =>{

let temp = document.getElementById("input").value;
this.setState({
  input:temp
})
console.log(this.state.input)
}


render() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Stream</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/streams/show">All streams</Nav.Link>
          <NavDropdown title="My streams" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/streams/create">Create</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/streams/edit">Edit</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/streams/delete">Delete</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/streams/about">F.A.Q</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input" />
          <Button variant="outline-success" onClick={this.eventChangeHandler}> Search</Button>
        </Form>
      </Navbar.Collapse>
      <GoogleAuth/>
    </Navbar>
   
        )
}

}
export default NavHeader;