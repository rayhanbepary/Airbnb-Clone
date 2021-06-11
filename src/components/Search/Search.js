import React, { useContext, useState } from 'react';
import { AirCncContext } from '../../Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Search = () => {

    const [toggle, setToggle] = useState(false);
    const context = useContext(AirCncContext);
    const {changeHandler, searchRoomHandler, checkInHandler, checkOutHandler, location, adult, child, babies, checkIn, checkOut} = context;

    return (
        <div className="col-md-3">
            <div className="location">
                <span>Location</span> <br />
                <input 
                    type="text" 
                    onChange={changeHandler}
                    name="location"
                    placeholder="Where are you going"
                />
            </div>
            <div className="datePicker">
                <div className="row">
                    <div className="col-md-6" style={{paddingRight: '7px'}}>
                        <div className="check-in">
                            <span>Check in</span><br />
                            <DatePicker  
                                selected={checkIn}
                                onChange={date => checkInHandler(date)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6" style={{paddingLeft: '7px'}}>
                        <div className="check-out">
                            <span>Check out</span><br />
                            <DatePicker  
                                selected={checkOut}
                                onChange={date => checkOutHandler(date)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="guest" onClick={() => setToggle(!toggle)}>
                <div>
                    <span style={{fontSize: '14px', color: '#8f9192'}}>Guests</span> <br />
                    <span className="total-guest">{adult} {adult > 1 ? "adults" : "adult"}, {child} {child > 1 ? "children" : "child"}</span>
                </div>
                { toggle ? <IoIosArrowUp style={{marginTop: '20px'}}/> : <IoIosArrowDown style={{marginTop: '20px'}}/> }
            </div>
            <div className={toggle ? 'displayVisible' : 'displayNone'}>
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

            <Link to={`/s/${location}`}> 
                <button onClick={searchRoomHandler} className="src-btn">Search</button>
            </Link>

        </div>
    );
};

export default Search;