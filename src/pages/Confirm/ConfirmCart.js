import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AirCncContext } from '../../Context';

const ConfirmCart = () => {

    // recover data from context
    const context = useContext(AirCncContext);
    const {reservedRoom, checkOut, checkIn, subtotal, grandTotal, tax} = context;

    let image = reservedRoom.length !== 0 && reservedRoom.images.map(image => image.url);

    // To calculate the time difference of two dates
    let Difference_In_Time = checkOut.getTime() - checkIn.getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Math.round( Difference_In_Time / (1000 * 3600 * 24));

    return (
        <div className="confirm-cart">
            <div className="confirm-room">
                <img src={image[0]} alt="" />
                <div className="cart-detail">
                    <span style={{fontSize: '18px', color: '#57595d'}}>{reservedRoom.hotelName}</span> <br />
                    <span style={{fontSize: '14px', color: '#787a7b'}}>{reservedRoom.bed} bed . </span>
                    <span style={{fontSize: '14px', color: '#787a7b'}}>{reservedRoom.bath} bath</span> <br />
                    <span>
                        <span className="star">
                            <AiFillStar />
                        </span>
                        <span style={{fontWeight: '600'}}>{reservedRoom.rating}</span>
                        <span style={{color: '#707173'}}> {reservedRoom.reviews}</span>
                    </span>
                </div>
            </div>
            <div className="total-amount">
                <h4 style={{fontWeight: '700', fontSize: '22px', marginTop: '20px'}}>Price details</h4>
                <div className="total-cost">
                    <div>
                        <p>${reservedRoom.price} x {Difference_In_Days === 0 ? '1' : Difference_In_Days} night</p> 
                        <p>Cleaning fee</p>
                        <p>Service fee</p>
                        <span>Occupancy taxes and fees</span>
                    </div>

                    <div className="ml-auto">
                        <p>${subtotal}</p>
                        <p>${reservedRoom.cleaningFee}</p> 
                        <p>${reservedRoom.serviceFee}</p> 
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

export default ConfirmCart;