import ProfileImage from '@/components/blocks/ProfileImage';
import Home from '@/components/pages/Home';
import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'Professional skills and Work Experiences of Jun',
};

const HomePage = async () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
