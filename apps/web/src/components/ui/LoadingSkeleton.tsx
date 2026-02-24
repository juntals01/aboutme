import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className='flex h-screen transition-all ease-in-out duration-600'>
      <div className='m-auto'>
        <h3 className='font-bold text-3xl'>Norberto Libago</h3>
        <span className='sr-only'>Loading...</span>
        <div className='flex mt-4 justify-center align-middle space-x-3'>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-1.4s]'>
            <div className='h-3 w-3 bg-[#211C6A] rounded-full'></div>
          </div>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-1.2s]'>
            <div className='h-3 w-3 bg-[#59B4C3] rounded-full'></div>
          </div>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-1.0s]'>
            <div className='h-3 w-3 bg-[#74e28c] rounded-full'></div>
          </div>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-0.8s]'>
            <div className='h-3 w-3 bg-[#74E291] rounded-full'></div>
          </div>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-0.6s]'>
            <div className='h-3 w-3 bg-[#b7f396] rounded-full'></div>
          </div>
          <div className='space-x-2 justify-center items-center mt-4 min-h-11 animate-bounce [animation-delay:-0.2s]'>
            <div className='h-3 w-3 bg-[#EFF396] rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
