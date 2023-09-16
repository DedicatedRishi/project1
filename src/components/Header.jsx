import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <Wrapper>
            <nav className="navbar navbars navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand nav_brands" to={'/'}>ARCH<span className="nav_text mx-2">Our Arch competetion</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" href="#" >Aboutus</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Rules</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">School Design</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Landscape Design</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Register
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Register</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
      )
}
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
`
export default Header;