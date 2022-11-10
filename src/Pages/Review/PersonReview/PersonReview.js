import { Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../../Contexts/AuthProvider/AuthProvider';
import PrivateRoute from '../../../Routes/PrivateRoute';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewDetailsShow from './ReviewDetailsShow';

const PersonReview = ({params}) => {

    const {user} = useContext(authContext);
   
    const [reviews, setReviews] = useState([]);
    const [updatedReview, setUpdatedReview] = useState(false);

    useEffect(()=>{
        fetch(`https://assignment11-server-site-sajia09.vercel.app/reviews/${params}`)
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[updatedReview])

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
           <PrivateRoute> <ReviewForm reviews={reviews} setUpdatedReview={setUpdatedReview}></ReviewForm></PrivateRoute>
        }
      </div>
      </div>
    );
};

export default PersonReview;