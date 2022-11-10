import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo-1.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(authContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="sticky top-0"
        >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-3xl font-bold text-blue-700 dark:text-white">
                    PhotoZone
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user?.displayName}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {user?.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Link
                    to="/"
                    className='text-sm nav-item'
                >
                    Home
                </Link>
                <Link to="/services" className='text-sm nav-item' >
                    Services
                </Link>
                <Link to="/blog" className='text-sm nav-item'>
                    Blog
                </Link>
                {
                    user?.uid?
                    <>
                    <Link to={`/myreviews/${user?.email}`} className='text-sm nav-item'>
                    My Reviews
                    </Link>
                    <Link to="/addservice" className='text-sm nav-item'>
                    Add Service
                    </Link>
                    <Link to="/" onClick={handleLogOut} className='text-sm nav-item'>
                    Logout
                    </Link>
                    </>
                    :
                    <Link to="/Login" className='text-sm nav-item'>
                    Login
                    </Link>
                    
                    
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;