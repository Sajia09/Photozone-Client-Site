import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle'
import Banner from './Banner/Banner';
const Home = () => {
    UseTitle('Home');
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl">{services.length}</h2>
        </div>
    );
};

export default Home;