import React from 'react';
import './MyInformation.css';

const MyInformation = () => {
    return (
        <div>
            <div className='info-text'>
                <h3 >Amina Khatun</h3>
                <p>  Rajshahi, Bangladesh</p>
            </div>

            <div className='personal-info'>
                <div>

                    <p>Weight 50kg</p>
                </div>
                <div>

                    <p>Height
                        5.4</p>
                </div>

                <div>

                    <p>Age 22yrs</p>
                </div>


            </div>

            <div className='add-break'>
                <h3>Add A Break</h3>
                <div className='break-btn'>
                    <button>10s</button>

                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>

            <div>
                <h3 className='exercise-detail'>
                    Exercise Details
                </h3>
                <div className='exercise-time'>
                    <div className='exercise-h3'><h3>Exercise time</h3></div>
                    <div>
                        <p className='time-p'>select</p>
                    </div>
                </div>

                <div className='break-time'>
                    <div className='break-h3'><h3>Break time</h3></div>
                    <div>
                        <p className='time-break'>select</p>
                    </div>
                </div>
            </div>





            <div
                className='activity-completed'>
                <button >
                    Activity Completed
                </button>
            </div>


        </div>



    );
};

export default MyInformation;