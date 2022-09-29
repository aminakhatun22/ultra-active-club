import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const { activity, img, description, age, time } = props.activity;
    return (

        <div className='activity'>
            <div className="product-info">
                <img src={img} alt="">
                </img>
                <h1>{activity}</h1>
                <p>{description}</p>
                <p>Age:{age}</p>
                <p>Time required:{time}</p>
            </div>
            <button className='add-btn'>
                Add to list

            </button>
        </div>


    );
};

export default Activity;