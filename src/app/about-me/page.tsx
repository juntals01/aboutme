'use client';
import PageHeader from '@/components/blocks/Header';
import { useAppContext } from '@/components/utils/context';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { FaDev, FaServer } from 'react-icons/fa';
import { MdImportantDevices } from 'react-icons/md';

const AboutPage = () => {
  const { theme } = useAppContext();

  return (
    <section className='mt-16 mb-16'>
      <div className='container xl:max-w-5xl mx-auto'>
        <PageHeader>
          <h1>About Me</h1>
          <IoPersonOutline />
        </PageHeader>
      </div>
      <div className='container xl:max-w-5xl mx-auto text-white pt-8 flex-row md:flex md:px-8 px-4'>
        <div className='w-full md:w-3/4 space-y-4 text-md pr-2'>
          <h2 className='font-semibold text-xl'>Full Stack Web Developer</h2>
          <p>
            I&apos;m Norberto Q. Libago Jr, a seasoned web developer with over 8
            years of experience. Specializing in WordPress, ReactJS, Laravel,
            and AWS. I&apos;m passionate about crafting innovative digital
            solutions that elevate user experiences and drive business success.
          </p>
          <p>
            {' '}
            I&apos;m an experienced Full-Stack Web Developer with 8+ Years. 🚀
            3+ Years in NextJS, 🚀 5+ Years in Laravel, MySQL, 🚀 3+ Years
            WordPress, and 🚀 4+ Years Docker. I have a thorough experience in
            application development and I am an aspiring lawyer!
          </p>
        </div>
        <div className='w-full md:w-1/4 md:pl-2 pt-8 md:pt-0'>
          <h2 className='font-semibold text-xl pb-4'>Personal Information</h2>
          <ul className='space-y-2'>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Name :
              </b>{' '}
              <span>Norberto Q. Libago Jr</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Age :
              </b>{' '}
              <span>31 Years</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Residence :
              </b>{' '}
              <span>Cagayan de Oro City</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Address :
              </b>{' '}
              <span>Legaspi St. Consolacion</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Email :
              </b>{' '}
              <span>norbertoqjr@gmail.com</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Phone :
              </b>{' '}
              <span>(+63) 9366118106</span>
            </li>
            <li className='space-x-2'>
              <b
                className={`underline underline-offset-4 ${theme.color.decoration}`}
              >
                Freelance :{' '}
              </b>
              Available
            </li>
          </ul>
          <a
            href='/resume.docx'
            className={`inline-block uppercase font-semibold mt-4 ${theme.color.border} ${theme.color.text} border-2 px-4 py-2`}
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className='container xl:max-w-5xl mx-auto text-white pt-8 flex-row md:flex md:px-8 px-4'>
        <section className='w-full mt-16'>
          <h1
            className={`${theme.color.decoration} underline underline-offset-4 text-center font-semibold text-4xl`}
          >
            Services
          </h1>
          <div className='flex-row md:flex justify-between items-center mt-14 space-x-4'>
            <div className='flex-row mt-8 md:mt0 justify-center text-center'>
              <span
                className={`${theme.color.text} flex justify-center text-5xl mb-4`}
              >
                <FaDev />
              </span>

              <h5 className='text-xl font-bold mb-2'>Backend</h5>
              <p className='text-sm'>
                I mainly use <b>Laravel</b> on Backend. I am using php for long
                time now.
              </p>
            </div>
            <div className='flex-row mt-8 md:mt0 justify-center text-center'>
              <span
                className={`${theme.color.text} flex justify-center text-5xl mb-4`}
              >
                <MdImportantDevices />
              </span>

              <h5 className='text-xl font-bold mb-2'>Frontend</h5>
              <p className='text-sm'>
                I mainly use <b>NextJS</b> on Frontend. I am using Typescript
                for long time now.
              </p>
            </div>
            <div className='flex-row mt-8 md:mt0 justify-center text-center'>
              <span
                className={`${theme.color.text} flex justify-center text-5xl mb-4`}
              >
                <FaServer />
              </span>

              <h5 className='text-xl font-bold mb-2'>DevOp&apos;s</h5>
              <p className='text-sm'>
                I mainly use <b>AWS</b> on Server. I am using Docker for long
                time now.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;
