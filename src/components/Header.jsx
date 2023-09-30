import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <Wrapper>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isNavbarOpen ? 'show' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand nav_brands" href="/">ARCH<span className="nav_text mx-2">Our Arch competition</span></a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"} onClick={closeNavbar}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/about"} onClick={closeNavbar}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/rules"} onClick={closeNavbar}>Rules</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to={'categories/schooldesign'} onClick={closeNavbar}>School Design </NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to={'categories/landscapedesign'} onClick={closeNavbar}>Landscape Design</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Register
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#" onClick={closeNavbar}>Login</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={closeNavbar}>Register</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contactus"} tabIndex="-1" aria-disabled="true" onClick={closeNavbar}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .navbar {
        padding: 15px 15px;
    }
  
    .nav_brands {
        font-size: 22px;
        font-weight: 800;
    }
  
    .nav-link {
        margin-left: 20px;
        color: black !important;
    }
  
    .nav_text {
        font-size: 14px;
        font-weight: 700;
    }
  
    .dropdown:hover>.dropdown-menu {
        display: block;
    }
  
    .dropdown>.dropdown-toggle:active {
        pointer-events: none;
    }
    
    /* Add your additional CSS styles here */

    /* Example CSS style for a header background color */
    .navbar {
        background-color: #f8f9fa;
    }
`;

export default Header;
