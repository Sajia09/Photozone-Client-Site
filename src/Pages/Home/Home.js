import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle'
import ServiceCard from '../Services/ServiceCard';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
const Home = () => {
    UseTitle('Home');
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl text-blue-700 font-bold mt-20">Services Provided By PhotoZone</h1>
            <p className="text-xl font-medium mt-4">PhotoZone Provide the best Photography Services!!Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor</p>
            <div className='grid grid-cols-3 gap-4 my-5 mt-5'>
            {
                (services && services.slice(0,3).map(service =><ServiceCard key={service._id}
                    service={service}
                ></ServiceCard>))
            }
            </div>
            <div><Link to='/services'><Button gradientDuoTone="cyanToBlue">See All</Button></Link></div>
            <Contact></Contact>
        </div>
    );
};

export default Home;