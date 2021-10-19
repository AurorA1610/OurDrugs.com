import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error } = useAuth();

    return (
        <div className="login-form">
            <div>
                <h2 className="text-success my-4">Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <input required onBlur={handleEmailChange} type="email" placeholder="Enter Your Email" /> <br /> <br />
                    <input required onBlur={handlePasswordChange} type="password" placeholder="Enter A Password" /> <br /> <br />
                    <div className="text-danger">{error}</div>  <br />
                    <input type="submit" value="submit" /> <br />
                </form>
                <p className="mt-5">Already an user? <Link to="/login">Log In</Link></p>
                <hr />
                <h6>Or, </h6>
                <Button onClick={signInUsingGoogle} variant="warning">Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Register;