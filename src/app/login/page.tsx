'use client';

import PageHeader from '@/components/blocks/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppContext } from '@/components/utils/context';
import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const API_URL = typeof window !== 'undefined' ? '/api' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api');

const LoginPage = () => {
  const { theme } = useAppContext();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.message || 'Invalid email or password');
        setLoading(false);
        return;
      }
      if (data.access_token) {
        typeof window !== 'undefined' && localStorage.setItem('token', data.access_token);
        router.push('/dashboard');
        router.refresh();
      }
    } catch {
      setError('Login failed. Try again.');
    }
    setLoading(false);
  };

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
          <form onSubmit={handleSubmit} className='space-y-4'>
            {error && (
              <p className='text-red-400 text-sm'>{error}</p>
            )}
            <div>
              <label htmlFor='email' className='block text-sm text-[#777] mb-1'>
                Email
              </label>
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#1d1e22] border-[#1d1e22] text-white'
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#1d1e22] border-[#1d1e22] text-white'
                required
              />
            </div>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
