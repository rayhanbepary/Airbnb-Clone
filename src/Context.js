import React, { Component, createContext } from 'react';
import room from './Data/room';

const AirCncContext = createContext();

class AirCncProvider extends Component {

    state = {
        location: '',
        searchedRoom: [],
        reservedRoom: [],
        adult: 0,
        child: 0,
        babies: 0,
        checkIn: new Date(),
        checkOut: new Date(),
        tax: 0,
        subtotal: 0,
        grandTotal: 0,
        cardNumber: '',
        cardExpiration: '',
        cardCVV: '',
        state: '',
        zipCode: '',
        city: '',
        street: '',
        suiteNumber: '',
        howPay: ''
    }

    // Input change handler
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // checkIn date handler
    checkInHandler = (date) => {
        this.setState({
            checkIn: date
        })
    }

    // checkOut date handler
    checkOutHandler = (date) => {
        this.setState({
            checkOut: date
        })
    }

    // search room handler
    searchRoomHandler = () => {
        const { location } = this.state;
        const rooms = room.filter(room => room.location.toLowerCase().indexOf( location.toLowerCase() ) !== -1 )

        let searchedRoom = this.formatData(rooms)

        this.setState({
            searchedRoom
        })
    }

    // reserve room handler
    reserveRoomHandler = (reservedRoom, grandTotal, subtotal, tax) => {
        this.setState({
            reservedRoom,
            grandTotal, 
            subtotal, 
            tax
        })
    }

    // format data
    formatData = (items) =>{
        let tempItems = items.map(item => {
            let images = item.images.map(image => image.url);
            let room = {...item,images};
            return room;
        })
        return tempItems;
    }

    render() {
        return (
            <AirCncContext.Provider
                value={{
                    ...this.state,
                    changeHandler: this.changeHandler,
                    checkInHandler: this.checkInHandler,
                    checkOutHandler: this.checkOutHandler,
                    searchRoomHandler: this.searchRoomHandler,
                    reserveRoomHandler: this.reserveRoomHandler
                }}
            >
                {this.props.children}
            </AirCncContext.Provider>
        );
    }
}

const AirCncConsumer = AirCncContext.Consumer;

export { AirCncProvider, AirCncConsumer, AirCncContext };