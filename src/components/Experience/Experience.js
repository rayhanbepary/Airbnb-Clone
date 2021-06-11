import React from 'react';

const Experience = ({experience}) => {
    return (
        <div className="col-md-4">
            <div className="experience-card">
                <img src={experience.img} alt="experience image"/>
                <h5 className="mt-3">{experience.title}</h5>
                <span>{experience.subtitle}</span>
            </div>
        </div>
    );
};

export default Experience;