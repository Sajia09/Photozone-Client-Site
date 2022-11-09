import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {

    const { createUser, updateUserProfile, providerLogin } = useContext(authContext);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                toast.success('Account created successfully!!')
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
 <div className='mx-20 p-20 bg-blue-100'>
  <Card className='mx-20'>
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
    <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name"
          />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="name"
          name='name'
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Email"
          />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="email"
          name='email'
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="photo"
            value="PhotoURL"
          />
        </div>
        <TextInput
          id="email1"
          type="text"
          placeholder="PhotoURL"
          name='photo'
        />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          name='password'
          required={true}
          placeholder="password"
          autoComplete='123456'
        />
      </div>
      <p>{error}</p>
      <p>Already have an account? <Link className='text-blue-500' to='/login'>Login Here</Link></p>
      <Button type="submit">
        Submit
      </Button>
    </form>
    <Button onClick={handleGoogleSignIn} type="submit" className='text-center'>
        Sign In With Google
      </Button>
  </Card>
</div>
    );
};

export default Signup;