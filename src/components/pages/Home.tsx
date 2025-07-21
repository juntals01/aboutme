'use client';
import React from 'react';
import { useAppContext } from '../utils/context';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const { theme } = useAppContext();

  return (
    <div className='h-full w-full relative'>
      <div className='bg-homebg w-full h-full bg-cover absolute top-0 left-0 bg-center z-0'>
        <div className='bg-black opacity-40 h-full w-full'></div>
      </div>
      <div className='relative h-screen w-full z-10 text-white flex items-center justify-center'>
        <div className=''>
          <h1 className='font-normal text-3xl md:text-5xl lg:text-7xl'>
            Norberto{' '}
            <span className={`font-bold ${theme.color.text}`}>Libago</span>
          </h1>
          <h2 className='flex space-x-2 justify-center mt-4 text-lg md:text-xl lg:text-2xl'>
            <span>I am an expert in </span>
            <span
              className={`font-bold underline underline-offset-8 ${theme.color.decoration}`}
            >
              <Typewriter
                options={{
                  strings: ['Laravel', 'NextJS', 'WordPress', "DevOp's"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
