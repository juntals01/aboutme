'use client';

import PageHeader from '@/components/blocks/Header';
import { useAppContext } from '@/components/utils/context';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { Masonry } from 'react-plock';

const PortfolioPage = () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { theme } = useAppContext();

  const boxes = [
    { src: '/portfolio/img-1.jpg' },
    { src: '/portfolio/img-2.jpg' },
    { src: '/portfolio/img-3.png' },
    // second row
    { src: '/portfolio/img-4.png' },
    { src: '/portfolio/img-5.png' },
  ];

  return (
    <section className='my-16'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>My Portfolio</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 flex-row md:flex md:px-8 px-4'>
        <div className='w-3/4 space-y-4 text-md pr-2'>
          <h2 className='font-semibold text-xl'>My Gallery</h2>
        </div>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 flex-row md:flex md:px-8 px-4'>
        <Masonry
          items={boxes}
          config={{
            columns: [1, 2, 3],
            gap: [24, 12, 6],
            media: [640, 768, 1024],
          }}
          render={(item, idx) => (
            <div className={`${theme.color.bg} relative group`} key={idx}>
              <div
                className={`${theme.color.bg} transition-all duration-500 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 absolute w-full h-full top-0 left-0 z-30 cursor-pointer items-center justify-center`}
              >
                <h1 className='font-bold text-7xl'>{idx}</h1>
              </div>
              <img src={item.src} className='bg-cover z-10' />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default PortfolioPage;
