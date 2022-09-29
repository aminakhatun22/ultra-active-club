import React from 'react';

import icon from '../../images/icon.png'
import './Header.css';



const Header = () => {
    return (
        <div >

            <div className='
        header-container'>
                <div className='img-container'>
                    <img src={icon} alt="" />
                </div>
                <div className='text-container'>
                    <h1>
                        Fitness Center
                    </h1>
                </div>
            </div>

            <h2 className='selected-exercise'>Selected today's exercises</h2>
        </div>

    );
};

export default Header;