import React from "react"
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
export default (props) => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Data Conquer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center" activeKey="/home">

        <Nav.Link href="#home">Shop</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/calc">Calc</Nav.Link>
        <Nav.Link href="/meal">Meal</Nav.Link>
        <Nav.Link href="/planner">Planner</Nav.Link>
        <Nav.Link href="/product">Product</Nav.Link>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
