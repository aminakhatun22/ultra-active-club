import React, { useEffect, useState } from 'react'
import Activity from '../Activities/Activity';
import './Exercise.css';

const Exercise = () => {
    const [activities, setActivities] = useState([]);
    useEffect
        (() => {
            fetch('activities.json')
                .then(res => res.json())
                .then(data => setActivities(data))
        }, [])
    return (
        <div className='exercise-container'>
            <div className="activity-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}

                        activity={activity}
                    >

                    </Activity>)
                }
            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
            </div>
        </div>
    );
};

export default Exercise;