import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div id="features">
        <h3  className="mt-5">Our Features</h3>
        <Row className="mb-5 bg-dark text-light p-5">
            <Col className="mb-3" md={3}><h4>Free Shipping</h4><h6>Free delivery to your home</h6></Col>
            <Col className="mb-3" md={3}><h4>Money Guarantee</h4><h6>30 days back</h6></Col>
            <Col className="mb-3" md={3}><h4>Payment Method</h4><h6>Secure System</h6></Col>
            <Col className="mb-3" md={3}><h4>Online Support</h4><h6>24 hours on day</h6></Col>  
        </Row>
        </div>
    );
};

export default Features;