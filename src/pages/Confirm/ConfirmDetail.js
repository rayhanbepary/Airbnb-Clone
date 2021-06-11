import React, { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AirCncContext } from '../../Context';
import card1 from '../../images/pay/card1.png';
import card2 from '../../images/pay/card2.png';
import card3 from '../../images/pay/card3.png';
import card4 from '../../images/pay/paypal.png';

const ConfirmDetail = () => {

    // recover data from context
    const context = useContext(AirCncContext);
    const {reservedRoom, changeHandler, checkIn, checkOut, adult, child, grandTotal} = context;

    // formate date
    const formatDate = (nowDate) => {
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(nowDate);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(nowDate);
        return mo +" "+ da
    }

    // total guests
    const guests = parseInt(adult) + parseInt(child);

    return (
        <div className="confirm-detail">
            <button className="back-btn" onClick={() => window.history.back()}><IoIosArrowBack /></button>
            <span className="confirm-header">Confirm and pay</span>
            <div className="trip">
                <h4 style={{fontWeight: '700'}}>Your trip</h4>
                <div className="trip-dates">
                    <h6>Dates</h6>
                    <span>{formatDate(new Date(checkIn))} - {formatDate(new Date(checkOut))}</span>
                </div>
                <div className="trip-guests">
                    <h6>Guests</h6>
                    <span>{guests} {guests > 1 ? "guests" : "guest"}</span>
                </div>
            </div>
            <div className="how-to-pay">
                <h4 style={{fontWeight: '700'}}>Choose how to pay</h4>
                <div className="pay-full">
                    <div>
                        <span style={{fontWeight: '700', fontSize: '17px'}}>Pay in full</span> <br />
                        <span>Pay the total now and you're all set.</span>
                    </div>
                    <div>
                        <span style={{fontWeight: '700', fontSize: '17px', paddingRight: '10px'}}>${grandTotal}</span>
                        <input 
                            style={{marginTop: '6px'}}
                            type="radio" 
                            id="howPay1"
                            name="howPay" 
                            className="form-check-input payment-input"
                            value="Pay full"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="pay-part">
                    <div style={{width: '85%'}}>
                        <span style={{fontWeight: '700', fontSize: '17px'}}>Pay part now, part later</span> <br />
                        <span>Pay ${grandTotal/2} now, and the rest (${grandTotal/2}) will be automatically charged to the same payment method on Jun 16, 2021. No extra fees.</span>
                    </div>
                    <div>
                        <span style={{fontWeight: '700', fontSize: '17px', paddingRight: '10px'}}>${grandTotal/2}</span>
                        <input 
                            style={{marginTop: '6px'}}
                            type="radio" 
                            id="howPay2"
                            name="howPay" 
                            className="form-check-input payment-input"
                            value="Pay part"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
            </div>
            <div className="pay-with-wrapper">
                <div className="pay-with">
                    <h4 style={{fontWeight: '700'}}>Pay with</h4>
                    <div className="cardCredit">
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
                        <img src={card4} alt="" />
                    </div>
                </div>
                <div className="credit-card">
                    <div className="card-number">
                        <label htmlFor="cardNumber">Card number</label> <br />
                        <input 
                            type="text"
                            onChange={changeHandler}
                            name="cardNumber"
                            id="cardNumber"
                            placeholder="0000 0000 0000 0000"
                        />
                    </div>
                    <div className="card-exp-cvv">
                        <div className="card-exp">
                            <label htmlFor="cardExpiration">Expiration</label> <br />
                            <input 
                                type="text"
                                onChange={changeHandler}
                                name="cardExpiration"
                                id="cardExpiration"
                                placeholder="MM / YY"
                            />
                        </div>
                        <div className="card-cvv">
                            <label htmlFor="cardCVV">CVV</label> <br />
                            <input 
                                type="text"
                                onChange={changeHandler}
                                name="cardCVV"
                                id="cardCVV"
                                placeholder="123"
                            />
                        </div>
                    </div>
                </div>

                <div className="billing-address">
                    <h6 className="mb-3">Billing address</h6>
                    <div className="street-address">
                        <label htmlFor="street">Street address</label> <br />
                        <input 
                            type="text"
                            onChange={changeHandler}
                            name="street"
                            id="street"
                        />
                    </div>
                    <div className="suite-number">
                        <label htmlFor="suiteNumber">Suite number</label> <br />
                        <input 
                            type="text"
                            onChange={changeHandler}
                            name="suiteNumber"
                            id="suiteNumber"
                        />
                    </div>
                    <div className="city">
                        <label htmlFor="city">City</label> <br />
                        <input 
                            type="text"
                            onChange={changeHandler}
                            name="city"
                            id="city"
                        />
                    </div>
                    <div className="state-zip">
                        <div className="state">
                            <label htmlFor="state">State</label> <br />
                            <input 
                                type="text"
                                onChange={changeHandler}
                                name="state"
                                id="state"
                            />
                        </div>
                        <div className="zip">
                            <label htmlFor="zipCode">ZIP code</label> <br />
                            <input 
                                type="text"
                                onChange={changeHandler}
                                name="zipCode"
                                id="zipCode"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={() => alert('Reservation successful')} className="confirm-btn">Confirm and pay</button>
                </div>

            </div>
        </div>
    );
};

export default ConfirmDetail;