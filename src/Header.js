import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Form,FormControl } from 'react-bootstrap';
class Header extends React.Component
{
  render()
  {
    return (

      



<Navbar bg="primary" variant="dark" fixed="right">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Form inline>
      <FormControl type="text" placeholder="Explore Sessions" className="mr-sm-2" />

    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#pricing">Teach</Nav.Link>
      <Nav.Link href="#features">Enterprises</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
      <Nav.Link href="#pricing">Sign up free</Nav.Link>
    </Nav>
    
  </Navbar>
    )
  }
}
export default Header;

