import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Toastify = () => {
    const notify = () => toast("Weldone activity completed!");
    return (
        <div
            className='activity-completed'>
            <button onClick={notify} >
                Activity Completed
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Toastify;