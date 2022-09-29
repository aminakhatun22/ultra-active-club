import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const { activity, handleAddToListClick } = props;
    const { title, img, age, time } = activity;


    return (

        <div className='activity'>
            <div className="activity-info">
                <img src={img} alt="">
                </img>
                <h3>{title}</h3>

                <p>Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <div className='add-btn'>
                <button onClick={() => handleAddToListClick(activity)} >
                    Add to list

                </button>
            </div>

        </div>


    );
};

export default Activity;