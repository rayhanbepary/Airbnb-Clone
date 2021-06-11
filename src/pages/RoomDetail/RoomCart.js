import React, { useContext, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AirCncContext } from '../../Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const RoomCart = ({room}) => {

    // recover data from context
    const context = useContext(AirCncContext)
    const {changeHandler, checkInHandler, checkOutHandler, reserveRoomHandler, location, adult, child, babies, checkIn, checkOut,} = context;
    
    const [toggleGuest, setToggleGuest] = useState(false);

    // To calculate the time difference of two dates
    let Difference_In_Time = checkOut.getTime() - checkIn.getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Math.round( Difference_In_Time / (1000 * 3600 * 24));

    // total guests
    const guests = parseInt(adult) + parseInt(child);

    // subtotal amount
    let subtotal = function () {
        if (Difference_In_Days === 0 ) {
            return room.price * 1
        } else {
            return room.price * Difference_In_Days
        }
    }

    // tax
    let tax = Math.round(subtotal()*2/100); 

    // grandtotal amount
    let grandTotal = subtotal() + room.cleaningFee + room.serviceFee + tax;

    return (
        <div className="room-cart">
            <div className="again-price-rating">
                <span>
                    <span className="price">${room.price}/</span>
                    <span style={{fontSize: '20px'}}>night</span>
                </span>
                <span>
                    <span className="star">
                        <AiFillStar />
                    </span>
                    <span style={{fontWeight: '600'}}>{room.rating}</span>
                    <span style={{color: '#707173'}}> {room.reviews}</span>
                </span>
            </div>
            <div className="selected-date">
                <div className="check-in-date">
                    <span>Check in</span><br />
                    <DatePicker  
                        selected={checkIn}
                        onChange={date => checkInHandler(date)}
                    />
                </div>
                <div className="check-out-date">
                    <span>Check out</span><br />
                    <DatePicker  
                        selected={checkOut}
                        onChange={date => checkOutHandler(date)}
                    />
                </div>
            </div>

            <div className="guest-count">
                <div className="again-guest" onClick={() => setToggleGuest(!toggleGuest)}>
                    <div>
                        <span style={{fontSize: '12px', fontWeight: '700', textTransform: 'uppercase'}}>Guests</span> <br />
                        <span className="total-guest">{guests} {guests > 1 ? "guests" : "guest"}</span>
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
            <div className="reserve-btn">
                <Link to={`/book/stays/${room.slug}`}> 
                    <button onClick={() => reserveRoomHandler(room,grandTotal,subtotal(),tax)} className="src-btn">Reserve</button>
                </Link>
                <p>You won't be charged yet</p>
            </div>

            <div className="total-amount">
                <div className="total-cost">
                    <div>
                        <p>${room.price} x {Difference_In_Days === 0 ? '1' : Difference_In_Days} night</p> 
                        <p>Cleaning fee</p>
                        <p>Service fee</p>
                        <span>Occupancy taxes and fees</span>
                    </div>

                    <div className="status ml-auto">
                        <p>${subtotal()}</p>
                        <p>${room.cleaningFee}</p> 
                        <p>${room.serviceFee}</p> 
                        <span>${tax}</span>
                    </div>
                </div>
                <div className="grand-total">
                    <div>
                        <h5>Total</h5>
                    </div>

                    <div className="ml-auto"> 
                        <h5>${grandTotal}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCart;