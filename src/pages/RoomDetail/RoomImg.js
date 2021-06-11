import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const RoomImg = ({room, images}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 mb-3">
                    <h2>{room.hotelName}</h2>
                    <span>
                        <span className="star">
                            <AiFillStar />
                        </span>
                        <span style={{fontWeight: '600'}}>{room.rating}</span>
                        <span style={{color: '#707173'}}> {room.reviews} . </span>
                    </span>
                    <span style={{color: '#707173'}}>{room.location}</span>
                </div>
            </div>
            <div className="row">
                {
                    images.map(img => 
                        <div className="col-md-6 room-img">
                            <img src={img} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RoomImg;