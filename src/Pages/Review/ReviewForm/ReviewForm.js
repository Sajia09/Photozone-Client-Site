import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { authContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ReviewForm = ({reviews,setUpdatedReview}) => {
    const name = localStorage.getItem('serviceName');
    const id = localStorage.getItem('serviceId');
    const {user} = useContext(authContext);
    const img = user?.photoURL;

    const handleReview = (event)=>{
        event.preventDefault();
        const form = event.target;
        const reviewerName = form.rname.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const serviceId = form.serviceId.value;
        const img = form.image.value;
        const raing = form.ratings.value;
        const text = form.text.value;

        const review = {
            reviewerName ,
            email,
            serviceName,
            serviceId,
            img,
            raing,
            text
        }

        fetch('https://assignment11-server-site-sajia09.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Thanks for your valuable review!!')
                    form.reset();   
                }
            })
            .catch(er => console.error(er));
            setUpdatedReview(true);

    }
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add A Review</h2>
                    <form onSubmit={handleReview} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
                                <input type="text" name="serviceName" id="serviceName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service Name" defaultValue={name} required="" readOnly />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                <input type="text" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ImageURL" defaultValue={img} required="" readOnly/>
                            </div>
                            <div className="w-full">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Id</label>
                                <input type="password" name="serviceId" id="serviceId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service Id" defaultValue={id} required="" autoComplete='on' readOnly/>
                            </div>
                            <div className="w-full">
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reveiwer Name</label>
                                <input type="text" name="rname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Reveiwer Name" defaultValue={user?.displayName} required="" readOnly/>
                            </div>
                            <div className="w-full">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="email" defaultValue={user?.email} required="" readOnly/>
                            </div>
                            <div className="w-full">
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ratings</label>
                                <input type="text" name="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ratings" required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Give Review</label>
                                <textarea id="description" rows="8" name='text' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write your review here"></textarea>
                            </div>
                        </div>
                        <Button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-2xl font-semibold text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                           Give Review
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReviewForm;