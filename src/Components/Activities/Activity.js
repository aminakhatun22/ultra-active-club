import React from 'react';

const Activity = (props) => {
    const { activity, img, age, time } = props.activity;
    return (

        <div className='activity'>
            <div className="product-info">
                <img src={img} alt="">
                </img>
                <h1>{activity}</h1>

                <p>Age:{age}</p>
                <p>Time required:{time}s</p>
            </div>
            <div className='add-btn'>
                <button >
                    Add to list

                </button>
            </div>

        </div>


    );
};

export default Activity;