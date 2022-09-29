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
        </div>



    );
};

export default MyInformation;