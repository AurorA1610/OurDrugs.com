import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});

    // loading the data
    useEffect(() => {
        fetch("/drugs.json")
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
     
    // will be called after all data are loaded
    useEffect(() => {
        const foundService = services.find(service => service.id == serviceId);
        setSingleService(foundService);
    }, [services]);

    return (
        <div>
            <h1 className="fw-bold my-3">{singleService?.name}</h1>
            <img className="img-fluid border border-1 my-5 rounded" src={singleService?.img} alt="" />
            <p><b>Brand Names: </b>{singleService?.brands}</p>
            <p className="fs-5"><b>Drug Class: </b>{singleService?.drugClass}</p>
            <p className="fs-4 text-info w-50 mx-auto border p-2 border-3 rounded">{singleService?.description}</p>
            <p className="fs-5 w-50 mx-auto text-start "><b className="text-danger">Side Effects: </b>{singleService?.sideEffects}</p>
            
        </div>
    );
};

export default ServiceDetails;