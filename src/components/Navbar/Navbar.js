import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {

    // css style for signup button
    const signupStyles = {
        backgroundImage: 'linear-gradient(to right top, #ff385c, #fa3459, #f52f56, #f12a54, #ec2551, #e92052, #e61b53, #e31654, #e01159, #de0b5d, #da0762, #d70466)', 
        padding: '10px 25px',
        borderRadius: '50px',
        color: '#ffffff'
    }

    return (
        <div className="nav-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand logo" to="/">
                                    <img src={Logo} alt="logo" style={{width: '25%',height: 'auto'}}/>
                                </Link>
                                <button className="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <FaAlignRight className="nav-icon"/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav navigation-bar">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='active' to="/host/home">Host your home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='active' to="/host/experience">Host your experience</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='active' to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link sign-up" activeClassName='active' style={signupStyles} to="/signup">Sign up</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;