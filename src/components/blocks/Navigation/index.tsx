'use client';
import { NavigationLinks } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className='border-b border-[#1d1e22]'>
        {NavigationLinks &&
          NavigationLinks.map((link) => (
            <li
              className='border-t border-[#1d1e22] text-[#777] text-xs uppercase'
              key={link.name}
            >
              <a
                href={link.value}
                className={`flex items-center space-x-3 md:space-x-1 py-2 pl-4 md:pl-8 sm:pl-[25%] ${
                  pathname === link.value
                    ? 'text-white hover:text-grey-300 hover:border-[#1d1e22]'
                    : 'hover:text-white hover:border-[#1d1e22]'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
