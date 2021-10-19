import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <Col>
            <Card className="service">
                <Card.Img variant="top" src={img} height="300" />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;