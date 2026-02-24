import PageHeader from '@/components/blocks/Header';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import maxmind, { CountryResponse } from 'maxmind';

const BlogPage = async () => {
  const req = () => {
    const FALLBACK_IP_ADDRESS = '0.0.0.0';
    const forwardedFor = headers().get('x-forwarded-for');

    if (forwardedFor) {
      const ip = forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
      if (ip.substr(0, 7) == '::ffff:') {
        return ip.substr(7);
      }
      return ip;
    }

    const ip = headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
    if (ip.substr(0, 7) == '::ffff:') {
      return ip.substr(7);
    }
    return ip;
  };

  const getCountry = async () => {
    const ip = req();
    const lookup = await maxmind.open('/path/to/GeoLite2-City.mmdb');
    const country = lookup.get(ip);

    return country;
  };

  const data = await getCountry();

  return (
    <section className='mt-16'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>IP Location</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>

      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>Blog</h1>
          <p>{data && JSON.stringify(data)}</p>
        </PageHeader>
      </div>
    </section>
  );
};

export default BlogPage;
