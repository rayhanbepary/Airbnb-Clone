import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import ConfirmCart from './ConfirmCart';
import ConfirmDetail from './ConfirmDetail';

const Confirm = () => {

    return (
        <>
            <div className="confirm-logo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/">
                                <img src={Logo} alt="" width="10%" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <ConfirmDetail></ConfirmDetail>
                    </div>
                    <div className="col-md-5">
                        <ConfirmCart></ConfirmCart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Confirm;