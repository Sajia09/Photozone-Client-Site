import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    UseTitle('Sevices');
    const services = useLoaderData();
    
    return (
        <div>
            <h1 className="text-4xl text-blue-700 font-bold mt-5">Services Provided By PhotoZone</h1>
            <p className="text-xl font-medium mt-4">PhotoZone Provide the best Photography Services!!Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor</p>
            <div className='grid grid-cols-3 mt-10 gap-4'>
            {
                services.map(service =><ServiceCard 
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;