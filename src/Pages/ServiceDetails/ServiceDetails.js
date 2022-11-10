import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {service_name} = useLoaderData()
    return (
        <div>
            <h1>{service_name} </h1>
        </div>
    );
};

export default ServiceDetails;