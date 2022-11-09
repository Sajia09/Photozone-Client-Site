import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewDetailsShow from './ReviewDetailsShow';

const PersonReview = ({params}) => {
   
    const [reviews, setReviews] = useState([]);
    const [updatedReview, setUpdatedReview] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${params}`)
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

    return (
      <div>
        <h2 className="text-4xl font-bold mb-5">Customer Reviews</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {
            reviews.map(review=><ReviewDetailsShow
            key={review._id}
            review={review}
            ></ReviewDetailsShow>)
        }
      </div>
      <div>
        {
            <ReviewForm reviews={reviews}></ReviewForm>
        }
      </div>
      </div>
    );
};

export default PersonReview;