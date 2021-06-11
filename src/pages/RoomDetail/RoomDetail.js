import React from 'react';
import home from '../../images/home.png';
import selfCheck from '../../images/checkmark-square-2.png';
import sparklingClean from '../../images/solid.png';
import superhost from '../../images/single-01.png';

const RoomDetail = ({room}) => {
    return (
        <div>
            <div className="features-host">
                <div>
                    <h3>{room.hostType} hosted by {room.hostName}</h3>
                    <div className="again-room-features">
                        <span>{room.guests} guests .</span>
                        <span> {room.bedrooms} bedrooms .</span>
                        <span> {room.bed} bed .</span>
                        <span> {room.bath} bath</span>
                    </div>
                </div>
                <div className="host">
                    <img src={room.hostImg} alt="" />
                </div>
            </div>
            <div className="hosting-features">
                <div className="entire-home">
                    <img src={home} alt="" width="20px" />
                    <span className="home">Entire home</span> <br />
                    <span className="home-des">{room.entireHome}</span>
                </div>
                <div className="self-check-in mt-4">
                    <img src={selfCheck} alt="" width="20px" />
                    <span className="self-check">Self check-in</span> <br />
                    <span className="self-check-des">{room.selfCheckIn}</span>
                </div>
                <div className="sparkling-clean mt-4">
                    <img src={sparklingClean} alt="" width="20px" />
                    <span className="sparkling">Sparkling clean</span> <br />
                    <span className="sparkling-des">{room.sparkling}</span>
                </div>
                <div className="super-host mt-4">
                    <img src={superhost} alt="" width="20px" />
                    <span className="superHost">{room.hostName} is a Super host</span> <br />
                    <p className="superHost-des">{room.hostDes}</p>
                </div>
            </div>
            <div>
                <p>{room.description}</p>
            </div>
        </div>
    );
};

export default RoomDetail;