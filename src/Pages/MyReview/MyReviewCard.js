import { Button, Card, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviewCard = ({ review, handleDelete }) => {
    const { reviewerName, email, serviceId, serviceName, raing, text, img, _id } = review;
    const [modalIsOpen,setVisible]=useState(false);
    const [reviews,setReviews] = useState()
    const {user} = useContext(authContext);
    const handleModalOpen = () =>{
        setVisible(true)
      }
      let texxt;
    const handleForm = event =>{
        event.preventDefault()
        texxt = event.target.text.value;
    }
      const handleStatusUpdate = (id) => {
        fetch(`https://assignment11-server-site-sajia09.vercel.app/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ text: texxt })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const approving = _id === id;
                    if(approving)
                    {
                        review.text = texxt;
                    }
                   
                    alert('Review Updated!!');
                }
            })
    }

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
                <React.Fragment>
  <Button onClick={handleModalOpen}>Edit Review</Button>
   <Modal show={modalIsOpen} onClose={() => setVisible(false)} >
  
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
         Edit Your Review
        </h3>
          <form onSubmit={handleForm}>
          <TextInput
            id="email"
            placeholder="Provide Your Email"
            required={true}
            defaultValue={user?.email}
            name="email"
            readOnly
            className='mb-2'
          />
          <TextInput
            placeholder="id"
            required={true}
            defaultValue={_id}
            type="password"
            name='id'
            readOnly
            className='mb-2'
            autoComplete='on'
          />
          <Textarea placeholder='Type New Review Here'
           className='mb-2'
           name='text'>
          </Textarea>
          <Button type='submit' onClick={()=>handleStatusUpdate(_id)}>
            Update
          </Button>
          </form>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
                <Button color="failure" onClick={() => handleDelete(_id)}>Delete Review</Button>
            </Card>
        </div>
    );
};

export default MyReviewCard;