import React from 'react';
import { Link } from 'react-router-dom';

const Live = ({live}) => {
    return (
        <div className="col-md-4">
            <div className="live-card">
                <Link to="#" className="live-link">
                    <img src={live.img} alt="live image" width="100%" style={{borderRadius: '10px'}}/>
                    <h5 className="mt-3">{live.title}</h5>
                </Link>
            </div>
        </div>
    );
};

export default Live;