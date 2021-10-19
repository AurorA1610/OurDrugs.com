import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Brands = () => {
    return (
        <div id="brands">
            <h3  className="mt-5">Popular Brands</h3>
            <Row xs={2} md={4} className="g-3 mt-3 py-3 bg-success">
                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXCQy-eje3AQ4DBkGQOr1KzBvah0nKT9SbA&usqp=CAU" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimYuL6ViVU9j-qdp7YG25vMb81UihPUjPhA&usqp=CAU" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfEUi3hLrig--VMkeq-LoT395-bd3D-139A&usqp=CAU" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eXdaU2OFIljjpfSwATxbbE3iZCmGgOz76Q&usqp=CAU" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/br-10.jpg" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/br-9.jpg" height="300" />
                </Card>
                </Col> 

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/br-3.jpg" height="300" />
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img height="100" className="w-100" variant="top" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/br-6.jpg" height="300" />
                </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Brands;