import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height="300" />
                <Card.Body className="service">
                <Card.Title><h2 className="text-success mb-3">{name}</h2></Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
                <Link to={`/service/${id}`}>
                    <Button className="d-block w-100" variant="dark">Details</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;