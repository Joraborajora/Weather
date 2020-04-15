import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'
import NavbarToggle from 'react-bootstrap/NavbarToggle'

export default class Header extends Component {
    render() {
        return (
            <>

                <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#Home" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>

                        {/* создает блок, в котором помещается ссылки меню */}
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#About">About us</Nav.Link>
                                <Nav.Link href="#Blog">Blog</Nav.Link>
                                <Nav.Link href="#Contacts">Contacts</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-2"

                                />

                                <Button variant="outline-info">
                                    Search
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
