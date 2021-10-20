import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h2 className="text-warning">OurDrugs.com</h2></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#drugs">Drugs</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#brands">Brands</Nav.Link>
                    <Nav.Link as={Link} to="/stores">Stores</Nav.Link>
                    <Nav.Link as={Link} to="/support">Support</Nav.Link>
                    {
                        user?.email ? 
                        <Button onClick={logOut} variant="light">Log Out</Button>
                        :
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    }
                    <Navbar.Text className="ms-md-5">
                        {
                            user?.email ? 
                            <h6>{user.displayName}</h6>
                            :
                            <></>
                        }
                        
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;