import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2 className="4xl">Services</h2>
        </div>
    );
};

export default Services;