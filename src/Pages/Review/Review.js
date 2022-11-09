import { Card } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Review.css'
import PersonReview from './PersonReview/PersonReview';

const Review = () => {
    const details = useLoaderData();
    const { name, img, price, description, rating,_id } = details;
    return (
        <div className='mx-20'>
            <Card className='mx-10 detail-card mb-20'
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={img}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Price: ${price}
                </h5>
                <div className='flex items-center'><div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mr-2">
                Ratings: {rating}</div>
                <div>
                <FaStar></FaStar>
                </div></div>
            </Card>
            <PersonReview params={_id}></PersonReview>
        </div>
    );
};

export default Review;