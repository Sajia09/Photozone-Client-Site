import { Card } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';
import React from 'react';

const ReviewDetailsShow = ({ review }) => {
    const { reviewerName, email, serviceId, serviceName, raing, text, img } = review;


    return (
            <div className="max-w-sm">
            <Card>
                <div className="flex flex-col items-center pb-5">
                    <img src={img} alt="" className="mb-3 h-24 w-24 rounded-full shadow-lg" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {reviewerName}
                    </h5>
                    <div className="mt-4">
                        <p>{text}</p>
                    </div>
                    <div className='flex items-center'><div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mr-2">
                Ratings : {raing}</div>
                <div>
                <FaStar></FaStar>
                </div></div>
                </div>
            </Card>
        </div>
    );
};

export default ReviewDetailsShow;