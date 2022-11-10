import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';
import './MyReview.css'
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';

const MyReview = () => {
    UseTitle('MyReviews');
    const {user,logOut} = useContext(authContext);
    const [reviews,setReviews] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })    
        }

    }


    if(reviews.length === 0)
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
                reviews.map(review=><MyReviewCard
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                ></MyReviewCard>)
            }
          </div>     
            </div>
        );
    }
    
};

export default MyReview;