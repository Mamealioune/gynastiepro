import React from 'react';

const Intervalle = ({ number, children }) => {
    return (
        <div className='  w-full mt-2  h-24 bg-slate-50 flex justify-center items-center gap-2 font-josefin text-2xl'>
            {number && <span className='text-7xl text-orange-600 mx-2'>{number}</span>}
            <div className="flex flex-1 items-center">
                {children}
            </div>
        </div>
    );
};

export default Intervalle;
