import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-1.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
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
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Link
                    to="/"
                    className='text-xl nav-item'
                >
                    Home
                </Link>
                <Link to="/services" className='text-xl nav-item' >
                    Services
                </Link>
                <Link to="/blog" className='text-xl nav-item'>
                    Blog
                </Link>
                <Link to="/signup" className='text-xl nav-item'>
                    Login
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;