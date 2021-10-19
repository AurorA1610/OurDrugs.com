import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, setUser, signInUsingGoogle, logOut} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h2 className="text-warning">OurDrugs.com</h2></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/home#drugs">Drugs</Nav.Link>
                    <Nav.Link as={Link} to="/home#pricing">Pricing</Nav.Link>
                    {
                        user?.email ? 
                        <Button onClick={logOut} variant="light">Log Out</Button>
                        :
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    }
                    <Navbar.Text className="ms-md-5">
                        {
                            user?.email ? 
                            <h6><img width="50" height="50" className="rounded-circle me-2" src={user.photoURL} alt="" />{user.displayName}</h6>
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