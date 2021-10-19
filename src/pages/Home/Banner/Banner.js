import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="700"
                src="https://i.ibb.co/vHHqfh5/img1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="text-dark fw-bold">Ours is the most comprehensive and up-to-date source of drug information online.</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="700"
                src="https://i.ibb.co/LpkNGMW/img2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text-dark fw-bold">Your trusted source for prescription drugs and medications.</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="700"
                src="https://i.ibb.co/0CnCzfW/img3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="text-dark fw-bold">Kick away diseases. Take the right drug.</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;