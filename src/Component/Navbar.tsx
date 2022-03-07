import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <Navbar sticky="top" expand="lg" className='Navbar'>
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link
                                className="text-reset text-decoration-none p-2 rounded btn btn-outline-info m-1"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-reset text-decoration-none p-2 rounded btn btn-outline-info m-1"
                                to="/sign-up"
                            >
                                Sign Up
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;