import React from 'react';
import Loader from './Loader';

const Loading = () => {
    return (
        <div className='grid w-full h-screen place-items-center'>
            <Loader />
        </div>
    );
};

export default Loading;
