import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogIn, handleResetPassword, error } = useAuth();

    return (
        <div className="login-form">
            <div>
                <h2 className="text-success my-4">Please log in</h2>
                <form onSubmit={handleLogIn}>
                    <input onBlur={handleEmailChange} type="email" placeholder=" Email" /> <br /> <br />
                    <input onBlur={handlePasswordChange} type="password" placeholder="Password" /> <br /> <br />
                    <div className="text-danger">{error}</div>  <br />
                    <input type="submit" value="submit" /> <br /> <br />
                </form>
                <Button onClick={handleResetPassword} variant="primary">Reset Password</Button>
                <p className="mt-5">New User? <Link to="/register">Create Account</Link></p>
                <hr />
                <h6>Or, </h6>
                <Button onClick={signInUsingGoogle} variant="warning">Sign In With Google</Button>
            </div>
        </div>
    );
};

export default LogIn;