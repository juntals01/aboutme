import React from 'react';
import {
  FaSquareDribbble,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareSnapchat,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='mt-[200px] flex-row items-center text-sm text-center text-[#777] space-y-0'>
      <div className='flex justify-center align-middle mb-4'>
        <ul className='flex space-x-2'>
          <li>
            <a href='#'>
              <FaSquareFacebook size={18} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaSquareXTwitter size={18} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaSquareInstagram size={18} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaSquareDribbble size={18} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaSquareSnapchat size={18} />
            </a>
          </li>
        </ul>
      </div>
      <p>{new Date().getFullYear()} ©CustomTheme.</p>
      <p>All Right Reserved.</p>
    </div>
  );
};

export default Footer;
