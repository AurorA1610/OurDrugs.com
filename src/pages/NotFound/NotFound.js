import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="mt-5 p-2 bg-primary">
                <img className="img-fluid" height="700" src="https://i.ibb.co/W2dnzCW/error.jpg" alt="" />
            </div>
            <Link to="/"><Button className="mt-5" variant="secondary">Go Back to Home</Button></Link>
        </div>
    );
};

export default NotFound;