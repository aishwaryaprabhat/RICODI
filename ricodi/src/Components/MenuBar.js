import React from 'react'
import { Navbar, Nav, Container, NavDropdown, FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const MenuBar = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">RICODI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#">About</Nav.Link>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Python</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">JAVA</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Golang</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">JavaScript</NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Font" id="basic-nav-dropdown">
                    <NavDropdown.Item>Arial</NavDropdown.Item>
                    <NavDropdown.Item>Bitstream Vera Sans</NavDropdown.Item>
                    <NavDropdown.Item>Bitstream Vera Sans Mono</NavDropdown.Item>
                    <NavDropdown.Item>Consolas</NavDropdown.Item>
                    <NavDropdown.Item>Dina</NavDropdown.Item>
                    <NavDropdown.Item>Lucida Console</NavDropdown.Item>
                    <NavDropdown.Item>Lucida Sans</NavDropdown.Item>
                    <NavDropdown.Item>Monac</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Dark Theme"
                    fontColor
                    value={true}
                />
                </Form>
             
            </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default MenuBar
