import React from 'react';
import { useParams } from 'react-router-dom';
import SecondNav from '../../components/SecondNav/SecondNav';
import { AirCncContext } from '../../Context';
import rooms from '../../Data/room';
import RoomCart from './RoomCart';
import RoomDetail from './RoomDetail';
import RoomImg from './RoomImg';

const RoomDetailWrapper = () => {

    const {slug} = useParams()
    const room = rooms.find(item => item.slug === slug);
    let images = room.images.map(image => image.url);

    return (
        <>
            <SecondNav></SecondNav>
            <RoomImg room={room} images={images}></RoomImg>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <RoomDetail room={room}></RoomDetail>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <RoomCart room={room}></RoomCart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomDetailWrapper;