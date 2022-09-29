import React, { useEffect, useState } from 'react'
import Activity from '../Activities/Activity';

import MyInformation from '../MyInformation/MyInformation';
import './Exercise.css';

const Exercise = () => {
    const [activities, setActivities] = useState([]);
    const [myTime, setMytime] = useState(0);


    useEffect
        (() => {
            fetch('activities.json')
                .then(res => res.json())
                .then(data => setActivities(data))
        }, []);
    const [details, setDetails] = useState([]);

    const handleAddToListClick = (time) => {
        setMytime(time + myTime);


        // const newDetails = [...details, activities];

        // setDetails(newDetails);

    }
    return (


        <div className='exercise-container'>

            <div className="activity-container">

                {
                    activities.map(activity =>



                        <Activity
                            key={activity.id}

                            activity={activity}
                            handleAddToListClick={handleAddToListClick}
                        >

                        </Activity>)




                }

            </div>
            <div className="cart-container">
                <MyInformation myTime={myTime}>

                </MyInformation>
            </div>
        </div>
    );
};

export default Exercise;
