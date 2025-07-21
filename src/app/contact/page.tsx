'use client';
import PageHeader from '@/components/blocks/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAppContext } from '@/components/utils/context';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const AboutPage = () => {
  const { theme } = useAppContext();
  return (
    <section className='mt-16'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>Contact</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 flex-row md:flex md:px-8 px-4'>
        <div className='w-full space-y-4 text-md pr-2 flex items-center justify-center'>
          <h2
            className={`${theme.color.decoration} font-semibold text-2xl underline underline-offset-8`}
          >
            Let&apos;s Talk
          </h2>
        </div>
      </div>

      <div className='container xl:max-w-xl text-white py-8 space-y-6 flex-row px-4 mx-auto'>
        <div className='w-full text-md flex flex-row space-x-4'>
          <Input
            className={`basis-1/2 bg-transparent ${theme.color.border} border-opacity-50 hover:border-none bg-[#3c3d40] placeholder-white`}
            placeholder='First Name'
          />
          <Input
            className={`basis-1/2 bg-transparent ${theme.color.border} border-opacity-50 hover:border-none bg-[#3c3d40] placeholder-white`}
            placeholder='Last Name'
          />
        </div>
        <div className='w-full text-md flex flex-row space-x-4'>
          <Textarea
            className={`w-full bg-transparent ${theme.color.border} border-opacity-50 hover:border-none bg-[#3c3d40] placeholder-white`}
            placeholder='Send me a message'
          />
        </div>
        <div className='w-full text-md flex flex-row space-x-4'>
          <Button
            className={`w-full ${theme.color.border} border-opacity-50 bg-[#3c3d40] hover:bg-blue placeholder-white`}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
