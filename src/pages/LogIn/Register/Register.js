import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <div>
                <h2 className="text-success">Please Register</h2>
                <form>
                    <input type="email" placeholder=" Email" /> <br />
                    <input type="password" placeholder="Password" /> <br />
                    <input type="submit" value="submit" /> <br />
                </form>
                <p>Already an user? <Link to="/register">Create Account</Link></p>
                <hr />
                <h6>Or, </h6>
                <Button onClick={signInUsingGoogle} variant="warning">Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Register;