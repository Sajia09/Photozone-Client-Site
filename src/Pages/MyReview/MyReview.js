import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';
import './MyReview.css'

const MyReview = () => {
    const myreviews = useLoaderData();
    if(myreviews.length === 0)
    {
        return (
            <div>
                <h1 className="text-4xl content">No reviews were added</h1>
            </div>
        );
    }
    else {
        return (
            <div>
            <h2 className="text-4xl font-bold mb-5">My Reviews</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                myreviews.map(review=><MyReviewCard
                key={review._id}
                review={review}
                ></MyReviewCard>)
            }
          </div>     
            </div>
        );
    }
    
};

export default MyReview;