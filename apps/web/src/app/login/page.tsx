'use client';

import PageHeader from '@/components/blocks/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppContext } from '@/components/utils/context';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const LoginPage = () => {
  const { theme } = useAppContext();

  return (
    <section className='mt-16 min-h-screen flex flex-col justify-start'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>Login</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 md:px-8 px-4'>
        <div className='max-w-md mx-auto space-y-4'>
          <h2
            className={`${theme.color.decoration} font-semibold text-xl underline underline-offset-8`}
          >
            Sign in to your account
          </h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm text-[#777] mb-1'>
                Email
              </label>
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                className='bg-[#1d1e22] border-[#1d1e22] text-white'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm text-[#777] mb-1'>
                Password
              </label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                className='bg-[#1d1e22] border-[#1d1e22] text-white'
              />
            </div>
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
