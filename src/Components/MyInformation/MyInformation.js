import React, { useState } from 'react';


import Toastify from '../Toastify/Toastify';
import './MyInformation.css';





const MyInformation = (details) => {
    console.log(details)

    const [breaks, setBreaks] = useState(0);
    const breakTime = localStorage.getItem('break')
    const handleBreakTime = (e) => {
        localStorage.setItem('break', e)
        setBreaks(e);
    }
    let totalTime = 0;
    for (const detail in details) {


        totalTime = totalTime + detail.time;
        console.log(totalTime)
    }


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
                    <button onClick={() => handleBreakTime(10)}>10s</button>
                    <button onClick={() => handleBreakTime(20)}>20s</button>
                    <button onClick={() => handleBreakTime(30)}>30s</button>
                    <button onClick={() => handleBreakTime(40)}>40s</button>
                    <button onClick={() => handleBreakTime(50)}>50s</button>


                </div>
            </div>

            <div>
                <h3 className='exercise-detail'>
                    Exercise Details
                </h3>
                <div className='exercise-time'>
                    <div className='exercise-h3'><h3>Exercise time</h3></div>
                    <div>
                        <p className='time-p'>{totalTime}</p>

                    </div>
                </div>

                <div className='break-time'>
                    <div className='break-h3'><h3>Break time</h3></div>
                    <div>

                        <p className='time-break'>{breakTime}</p>
                    </div>
                </div>
            </div>





            <div>
                <Toastify></Toastify>

            </div>





        </div>



    );
};



export default MyInformation;