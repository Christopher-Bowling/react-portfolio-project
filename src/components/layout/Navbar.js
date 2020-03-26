import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../pages/img/logo-blue.jpg';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <div id='navbar-row' className="row mx-md-5 mx-auto w-100">
          <NavbarBrand>
            <NavLink className='nav-link' to='/home'>
              <img src={logo} alt='logo' />
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className='ml-auto' />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/online-courses'>
                  Online Courses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/coaching'>
                  Coaching
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/blog'>
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/about-me'>
                  About Me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
