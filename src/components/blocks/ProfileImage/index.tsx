'use client';
import { useAppContext } from '@/components/utils/context';
import React from 'react';

const ProfileImage = () => {
  const { theme } = useAppContext();

  return (
    <div className='flex relative min-h-[200px] bg-gray-500 overflow-hidden'>
      <div className='bg-headerProfile w-full h-full bg-cover bg-center absolute top-0 left-0'></div>
      <h1
        className={`${theme.color.bg} absolute w-full bottom-0 font-bold text-center text-white bg-opacity-80 px-4 py-2`}
      >
        Norberto Libago
      </h1>
    </div>
  );
};

export default ProfileImage;
