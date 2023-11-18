import React from 'react';
import Video from './Video';

const VideoCover = () => {
    return (
        <div className='h-[600px] bg-[#081828] flex items-center justify-center'>
            <div className='h-[572px] w-[1234px] absolute bg-[#ffffff24] border-[1px] border-[#eeeeee40] mt-[300px]  rounded-[30px] p-8'>
                <Video/>
            </div>
        </div>
    );
};

export default VideoCover;