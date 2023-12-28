import React from 'react';
import Loader from './Loader';

const Loading = () => {
    return (
        <div className='grid w-full h-screen place-items-center border'>
            <Loader />
        </div>
    );
};

export default Loading;
