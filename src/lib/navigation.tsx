import { IoIosHome } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { FaRegNewspaper } from 'react-icons/fa';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { LuLayoutDashboard } from 'react-icons/lu';

const NavigationLinks = [
  { icon: <IoIosHome size={20} />, name: 'Home', value: '/' },
  { icon: <IoPersonOutline size={20} />, name: 'About Me', value: '/about-me' },
  { icon: <FaRegNewspaper size={20} />, name: 'Resume', value: '/resume' },
  {
    icon: <IoBriefcaseOutline size={20} />,
    name: 'Portfolio',
    value: '/portfolio',
  },
  { icon: <LuContact size={20} />, name: 'Contact', value: '/contact' },
  { icon: <LuLayoutDashboard size={20} />, name: 'Dashboard', value: '/dashboard' },
];

export { NavigationLinks };
