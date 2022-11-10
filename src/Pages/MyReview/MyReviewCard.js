import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const MyReviewCard = ({review,handleDelete}) => {
    const { reviewerName, email, serviceId, serviceName, raing, text, img,_id } = review;
    return (
        <div className="max-w-sm">
            <Card>
                <div className="flex flex-col items-center pb-5">
                    <img src={img} alt="" className="mb-3 h-24 w-24 rounded-full shadow-lg" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {reviewerName}
                    </h5>
                    <div className="mt-4">
                        <p className='font-semibold'>Service Name : {serviceName}</p>
                        <p>{text}</p>
                    </div>
                    <div className='flex items-center'><div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mr-2">
                Ratings : {raing}</div>
                <div>
                <FaStar></FaStar>
                </div>
                </div>
                </div> 
                <Button>Edit Review</Button>
                  <Button color="failure" onClick={()=>handleDelete(_id)}>Delete Review</Button>    
            </Card>
        </div>
    );
};

export default MyReviewCard;