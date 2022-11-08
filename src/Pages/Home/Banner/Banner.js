import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-img'>
            <img src="https://i.ibb.co/ZNnkzMs/How-to-shoot-landscape-photography.jpg" alt="How-to-shoot-landscape-photography" border="0" />
            <div class="centered">
                <h1 className='text-5xl font-bold'>Welcome to PhotoZone</h1>
                <p className='text-lg font-semibold p-2 my-2'>The word Photography literally means 'drawing with light', which derives from the Greek photo, meaning light and graph, meaning to draw.</p>
                <div className='p-2'>
                    <Link to='/services'><Button gradientDuoTone="cyanToBlue">
                        Explore More
                    </Button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;