import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Store.css';

const Store = ({ store }) => {
    const { name, address, rating, website, img } = store;
    return (
        <Row  className="border-top border-3 p-4 store">
            <Col>
                <div>
                    <img width="300" height="170" className="img-fluid" src={img} alt=""/>
                </div>
                <div className="mt-3">
                    <h2 className="mb-3">{name}</h2>
                    <h5>Address: {address}</h5>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        className="star-rating"
                    ></Rating>
                    <p>Website: <a href={website} target="_blank" rel="noreferrer">{website}</a></p>
                </div>
            </Col>
        </Row>
    );
};

export default Store;