import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        
        <Navbar  style={{backgroundColor: "#66d6e5"}} expand="lg">
        <Container >
        <Navbar.Brand  href="#home">PC WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
            <Nav  className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Arma tu PC</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">AMD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    INTEL
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Procesador</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Accesorios
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar