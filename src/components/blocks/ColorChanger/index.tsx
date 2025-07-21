import React, { useState } from 'react';
import { useAppContext } from '@/components/utils/context';
import { GoGear } from 'react-icons/go';
import { motion } from 'framer-motion';

const ColorChanger = () => {
  const [isOpen, setisOpen] = useState(true);
  const { setTheme } = useAppContext();
  const colors = [
    {
      name: 'blue',
      bg: 'bg-blue',
      text: 'text-blue',
      decoration: 'decoration-blue-500',
      border: 'border-blue',
    },
    {
      name: 'green',
      bg: 'bg-green',
      text: 'text-green',
      decoration: 'decoration-green-500',
      border: 'border-green',
    },
    {
      name: 'turquoise',
      bg: 'bg-turquoise',
      text: 'text-turquoise',
      decoration: 'decoration-turquoise-500',
      border: 'border-turquoise',
    },
    {
      name: 'red',
      bg: 'bg-red',
      text: 'text-red',
      decoration: 'decoration-red-500',
      border: 'border-red',
    },
    {
      name: 'yellow',
      bg: 'bg-yellow',
      text: 'text-yellow',
      decoration: 'decoration-yellow-500',
      border: 'border-yellow',
    },
    {
      name: 'orange',
      bg: 'bg-orange',
      text: 'text-orange',
      decoration: 'decoration-orange-500',
      border: 'border-orange',
    },
  ];
  const variants = {
    open: { opacity: 1, x: '100%' },
    closed: { opacity: 1, x: '0%' },
  };
  return (
    <>
      <div className='absolute top-[150px] right-0 z-50'>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          initial={{ opacity: 0 }}
        >
          <div className='pl-6 pr-6 pb-6 pt-2 bg-white text-gray-700 border'>
            <button
              className='absolute -top-0 -left-[39px] h-[40px] w-[40px] bg-white hover:bg-gray-200 border-b border-l border-t'
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              <div className='w-full ht-full flex justify-center align-middle text-2xl'>
                <GoGear />
              </div>
            </button>
            <h2 className='font-bold mt-2 mb-4 uppercase text-center'>
              Page Animation
            </h2>
            <div className='grid grid-cols-3 gap-2 justify-between'>
              {colors.map((color) => (
                <div
                  className='hover:bg-gray-200 bg-white p-1 flex justify-center align-middle'
                  key={color.name}
                >
                  <button
                    className={`h-12 w-12 rounded-full text-center ${color.bg}`}
                    onClick={() => {
                      setTheme({ color: color });
                    }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ColorChanger;
