'use client';

import PageHeader from '@/components/blocks/Header';
import { useAppContext } from '@/components/utils/context';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoPersonOutline } from 'react-icons/io5';

const API_URL = typeof window !== 'undefined' ? '/api' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api');

export default function DashboardPage() {
  const { theme } = useAppContext();
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.replace('/login');
      return;
    }
    fetch(`${API_URL}/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token');
          router.replace('/login');
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.user) setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        router.replace('/login');
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.replace('/login');
    router.refresh();
  };

  if (loading) {
    return (
      <section className='mt-16 min-h-screen flex items-center justify-center'>
        <p className='text-[#777]'>Loading...</p>
      </section>
    );
  }

  return (
    <section className='mt-16 min-h-screen flex flex-col'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>Dashboard</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 md:px-8 px-4'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className={`${theme.color.decoration} font-semibold text-2xl underline underline-offset-8`}>
            Welcome back
          </h2>
          <button
            onClick={handleLogout}
            className='text-sm text-[#777] hover:text-white border border-[#1d1e22] hover:border-[#444] px-3 py-1.5 rounded'
          >
            Log out
          </button>
        </div>
        {user && (
          <div className='bg-[#1d1e22] rounded-lg p-6 border border-[#1d1e22]'>
            <p className='text-[#777] text-sm'>Signed in as</p>
            <p className='text-white font-medium'>{user.email}</p>
            <p className='text-[#777] text-sm mt-1'>Role: {user.role}</p>
          </div>
        )}
      </div>
    </section>
  );
}
