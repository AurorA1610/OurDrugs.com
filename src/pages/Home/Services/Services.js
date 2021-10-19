import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useServices([]);

    return (
        <section id="drugs">
            <h3 className="mt-5 mb-2">Check Out Some Common Drugs</h3>
            <Row xs={1} md={3} className="g-5">
                {
                    services.map(service => <Service
                                                key={service.id} 
                                                service={service}
                                            ></Service>)
                }
            </Row>
        </section>
    );
};

export default Services;