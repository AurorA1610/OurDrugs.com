import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Brands></Brands>
        </div>
    );
};

export default Home;