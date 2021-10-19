import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <div>
                <h2 className="text-success">Please log in</h2>
                <form>
                    <input type="email" placeholder=" Email" /> <br />
                    <input type="password" placeholder="Password" /> <br />
                    <input type="submit" value="submit" /> <br />
                </form>
                <p>New User? <Link to="/register">Create Account</Link></p>
                <hr />
                <h6>Or, </h6>
                <Button onClick={signInUsingGoogle} variant="warning">Sign In With Google</Button>
            </div>
            
        </div>
    );
};

export default LogIn;