import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { FaAlignRight } from 'react-icons/fa';
import { AirCncContext } from '../../Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiSearch} from 'react-icons/bi';

const SecondNav = () => {

    // css style for signup button
    const signupStyles = {
        backgroundImage: 'linear-gradient(to right top, #ff385c, #fa3459, #f52f56, #f12a54, #ec2551, #e92052, #e61b53, #e31654, #e01159, #de0b5d, #da0762, #d70466)', 
        padding: '10px 25px',
        borderRadius: '50px',
        color: '#ffffff'
    }

    // recover data from context
    const context = useContext(AirCncContext)
    const {changeHandler, checkInHandler, checkOutHandler, searchRoomHandler, location, adult, child, babies, checkIn, checkOut} = context;

    // formate date
    const formatDate = (nowDate) => {
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(nowDate);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(nowDate);
        return mo +" "+ da
    }

    let guests = parseInt(adult) + parseInt(child);

    const [toggle, setToggle] = useState(false);
    const [toggleGuest, setToggleGuest] = useState(false);


    return (
        <div className={ toggle ? "expand-second-nav" : "second-nav-wrapper" }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="second-nav navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand logo" to="/">
                                    <img src={Logo} alt="logo" style={{width: '25%',height: 'auto'}}/>
                                </Link>
                                <button className="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <FaAlignRight className="nav-icon"/>
                                </button>

                                <div className="search-here" onClick={() => setToggle(!toggle)}>
                                    <span style={{textTransform: 'capitalize', paddingRight: '10px',    borderRight: '1px solid #bfbcbc'}}>{location}</span>
                                    <span style={{paddingLeft: '10px'}}>{formatDate(new Date(checkIn))}</span>
                                    <span style={{paddingRight: '10px',    borderRight: '1px solid #bfbcbc'}}> - {formatDate(new Date(checkOut))}</span>
                                    <span style={{paddingLeft: '10px'}}>{guests} {guests > 1 ? "guests" : "guest"}</span>
                                </div>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav navigation-bar">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='active' to="/host/home">Become a host</NavLink>
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
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className={toggle ? "search-again" : "search-again-none"}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="again-location">
                                            <span>Location</span> <br />
                                            <input 
                                                type="text" 
                                                onChange={changeHandler}
                                                name="location"
                                                value={location}
                                                placeholder="Where are you going"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="again-check-in">
                                            <span>Check in</span><br />
                                            <DatePicker  
                                                selected={checkIn}
                                                onChange={date => checkInHandler(date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="again-check-out">
                                            <span>Check out</span><br />
                                            <DatePicker  
                                                selected={checkOut}
                                                onChange={date => checkOutHandler(date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="again-guest" onClick={() => setToggleGuest(!toggleGuest)}>
                                            <div>
                                                <span style={{fontSize: '14px', color: '#8f9192'}}>Guests</span> <br />
                                                <span className="total-guest">{adult} {adult > 1 ? "adults" : "adult"}, {child} {child > 1 ? "children" : "child"}</span>
                                            </div>
                                            { toggleGuest ? <IoIosArrowUp style={{marginTop: '20px'}}/> : <IoIosArrowDown style={{marginTop: '20px'}}/> }
                                        </div>
                                        <div className={toggleGuest ? 'again-displayVisible' : 'again-displayNone'}>
                                            <div className="adult">
                                                <span>adults</span>
                                                <input 
                                                    type="number"
                                                    onChange={changeHandler}
                                                    name="adult"
                                                    value={adult}
                                                    className="text-center"
                                                />
                                            </div>
                                            <div className="child">
                                                <div>
                                                    <span>child</span> <br />
                                                    <small style={{fontSize: '13px', color: '#8f9192'}}>Age 2-12</small>
                                                </div>
                                                <input 
                                                    type="number"
                                                    onChange={changeHandler}
                                                    name="child"
                                                    value={child}
                                                    className="text-center"
                                                />
                                            </div>
                                            <div className="babies">
                                                <div>
                                                    <span>babies</span> <br />
                                                    <small style={{fontSize: '13px', color: '#8f9192'}}>Under 2</small>
                                                </div>
                                                <input 
                                                    type="number"
                                                    onChange={changeHandler}
                                                    name="babies"
                                                    value={babies}
                                                    className="text-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={`/s/${location}`}> 
                                            <button onClick={searchRoomHandler} className="again-src-btn"><BiSearch/></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SecondNav;

