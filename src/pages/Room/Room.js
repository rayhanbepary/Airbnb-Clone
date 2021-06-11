import React, { useContext } from 'react';
import { AirCncContext } from '../../Context';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SecondNav from '../../components/SecondNav/SecondNav';

const Room = () => {

    // recover data from context
    const context = useContext(AirCncContext);
    const {searchedRoom, location, checkIn, checkOut, adult, child} = context;

    // formate date
    const formatDate = (nowDate) => {
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(nowDate);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(nowDate);
        return mo +" "+ da
    }

    // total guests
    let guests = parseInt(adult) + parseInt(child);

    return (
        <>
            <SecondNav></SecondNav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{fontSize: '15px', fontWeight: '300'}}>{searchedRoom.length} {searchedRoom.length > 1 ? "stays" : "stay"} . {formatDate(new Date(checkIn))} - {formatDate(new Date(checkOut))} . {guests} {guests > 1 ? "guests" : "guest"}</p>
                        <h4 className="mb-4">Stays in {location}</h4>
                        <ul className="room-filter">
                            <li>Type of place</li>
                            <li>Price</li>
                            <li>Instant Book</li>
                            <li>Rooms and beds</li>
                            <li>More filters</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-10 mb-5 mt-3">
                        {
                            searchedRoom.map(room => 
                                <Link className="room-detail-link" to={`/rooms/${room.slug}`}>
                                    <div className="searched-rooms">
                                        <div className="row">
                                            <div className="col-md-4">
                                            <img src={room.images[0]} alt="" width="100%" style={{borderRadius: '10px'}} />    

                                            </div>
                                            <div className="col-md-8 room-text">
                                                <h5>{room.hotelName}</h5>
                                                <div className="room-features">
                                                    <span>{room.guests} guests .</span>
                                                    <span> {room.bedrooms} bedrooms .</span>
                                                    <span> {room.bed} bed .</span>
                                                    <span> {room.bath} bath</span>
                                                </div>
                                                <div className="amenities">
                                                    {
                                                        room.amenities.map( amenity => 
                                                            <span className="amenity">{amenity} . </span>
                                                        )
                                                    }
                                                </div>
                                                <div className="price-rating">
                                                    <span>
                                                        <span className="star">
                                                            <AiFillStar />
                                                        </span>
                                                        <span style={{fontWeight: '600'}}>{room.rating}</span>
                                                        <span style={{color: '#707173'}}> {room.reviews}</span>
                                                    </span>
                                                    <span>
                                                        <span className="price">${room.price}/</span>
                                                        <span style={{fontSize: '20px'}}>night</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Room;