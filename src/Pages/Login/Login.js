import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

        }
    return (
        <div className='mx-20 p-20 bg-blue-100'>
  <Card className='mx-20'>
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
    
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
      {error}
      <p>Don't have an account? <Link className='text-blue-500' to='/signup'>Signup Here</Link></p>
      <Button type="submit">
       Login
      </Button>
    </form>
  </Card>
</div>
    );
};

export default Login;