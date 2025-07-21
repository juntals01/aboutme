import ContactForm from '@/components/forms/contact';
import ScrollToTopButton from '@/components/utils/ScrollToTop';

export default function HomePageContent() {
  return (
    <div className='divide-y divide-gray-200'>
      <div className='bg-red-200 pt-4 px-8 bg-headerRepeat flex justify-center items-center'>
        <div className='mt-8 bg-headerProfile w-[200px] h-[200px] bg-cover -mb-10 relative border-white border-[6px]'></div>
        <div className='flex-grow pl-12'>
          <h3 className='font-bold text-2xl text-white'>
            Norberto Q. Libago Jr
          </h3>
          <h3 className=' text-white'>Web Developer</h3>
          <div className='flex space-x-2 mt-6'>
            <a
              href='/resume.docx'
              className='bg-[#e6e9ed] rounded-2xl px-4 py-2 text-sm text-[#434a54]'
            >
              Download CV
            </a>
            <a
              href='#contact-me'
              className='bg-[#37bc9b] rounded-2xl px-4 py-2 text-sm text-[#fff]'
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className='pt-16  px-8 flex profile-info-wrapper bg-white  pb-12'>
        <div className='profile-info w-1/2 pr-2 space-y-4 pb-4'>
          <h2 className='text-2xl font-bold my-6'>About me</h2>
          <p>
            I&apos;m Norberto Q. Libago Jr, a seasoned web developer with over 8
            years of experience. Specializing in WordPress, ReactJS, Laravel,
            and AWS, I&apos;m passionate about crafting innovative digital
            solutions that elevate user experiences and drive business success.
          </p>
          <p>Looking forward to connecting and collaborating!</p>
        </div>
        <div className='profile-info w-1/2 px-12 py-2'>
          <ul className='divide-y divide-gray-200 rounded-lg'>
            <li className='flex items-center justify-between p-2'>
              <span className='mr-1 text-sm font-semibold'>Age</span>
              <span className='text-sm font-medium text-left'>31</span>
            </li>
            <li className='flex items-center justify-between p-2'>
              <span className='mr-1 text-sm font-semibold'>Email</span>
              <span className='text-sm font-medium text-left'>
                <a href='mailto:norbertoqjr@gmail.com'>norbertoqjr@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-white pt-4 px-8 space-x-4 space-y-4 pb-12'>
        <h2 className='text-2xl font-bold my-6'>Professional Skills</h2>

        <div className='flex space-x-4'>
          <div className='w-1/2 space-y-4'>
            <div>
              <h4>React/Typescript - NextJs</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-primary-600 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '95%' }}
                >
                  95%
                </div>
              </div>
            </div>
            <div>
              <h4>Wordpress</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-primary-500 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '90%' }}
                >
                  90%
                </div>
              </div>
            </div>
            <div>
              <h4>SQL (MYSQL, Postgres)</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-primary-500 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '90%' }}
                >
                  90%
                </div>
              </div>
            </div>
            <div>
              <h4>GIT as Version Control System</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-primary-400 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '99%' }}
                >
                  99%
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 space-y-4'>
            <div>
              <h4>Laravel</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-secondary-600 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '87%' }}
                >
                  87%
                </div>
              </div>
            </div>
            <div>
              <h4>Mysql</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-secondary-500 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '86%' }}
                >
                  86%
                </div>
              </div>
            </div>
            <div>
              <h4>AWS - DevOp</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-secondary-400 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '66%' }}
                >
                  56%
                </div>
              </div>
            </div>
            <div>
              <h4>HTML & CSS</h4>
              <div className='flex h-4 w-full items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-950'>
                <div
                  role='progressbar'
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className='flex items-center justify-center self-stretch rounded-full bg-secondary-400 text-xs font-medium text-white transition-all duration-500 ease-out'
                  style={{ width: '70%' }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pt-4 px-8 space-x-4 space-y-4 pb-6'>
        <h2 className='text-2xl font-bold my-6'>Work Experience</h2>

        {/* Timeline: Centered with Extra Info */}
        <div className='relative py-5 dark:text-gray-100'>
          {/* Vertical Guide */}
          <div
            className='absolute bottom-0 left-0 top-0 flex w-10 flex-col justify-center md:w-12 lg:left-1/2 lg:-ml-6'
            aria-hidden='true'
          >
            <div className='mx-auto h-2.5 w-1 grow-0 rounded-t bg-gradient-to-b from-transparent to-primary-100 dark:to-primary-900' />
            <div className='mx-auto w-1 grow bg-primary-100 dark:bg-primary-900' />
            <div className='mx-auto h-2.5 w-1 grow-0 rounded-b bg-gradient-to-t from-transparent to-primary-100 dark:to-primary-900' />
          </div>
          {/* END Vertical Guide */}

          {/* Timeline */}
          <ul className='relative space-y-4 pl-10 md:pl-12 lg:pl-0'>
            {/* Event */}
            <li className='relative lg:mr-auto lg:w-1/2 lg:pr-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:left-auto lg:right-0 lg:translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>Arcanys</h4>
                <p className='text-sm'>
                  I worked on a game site with features like <b>Steam</b>.
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>NestJs - Backend</li>
                  <li>NextJs - Frontend</li>
                  <li>Postgres - Database</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:translate-x-full lg:flex-col lg:py-0 lg:pl-6 lg:pr-0'>
                <p className='text-sm font-medium text-gray-500'>
                  June 2023 – Current
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:ml-auto lg:w-1/2 lg:pl-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:-translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>Currinda Pty Ltd </h4>
                <p className='text-sm'>
                  I worked as a <b>Full Stack Web Developer + DevOps</b>
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Front-end code implementation with Next.Js</li>
                  <li>Back-end code implementation with Laravel</li>
                  <li>DevOps operation using AWS services</li>
                  <li>Database implementation using Mysql</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:-translate-x-full lg:flex-col lg:py-0 lg:pl-0 lg:pr-6 lg:text-right'>
                <p className='text-sm font-medium text-gray-500'>
                  Sept 2020 – June 2023
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:mr-auto lg:w-1/2 lg:pr-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:left-auto lg:right-0 lg:translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>
                  Umbrella Business Support
                </h4>
                <p className='text-sm'>
                  Mainly on <b>Wordpress</b> and <b>Laravel</b>
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Wordpress implementation</li>
                  <li>Back-end code implementation with Laravel</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:translate-x-full lg:flex-col lg:py-0 lg:pl-6 lg:pr-0'>
                <p className='text-sm font-medium text-gray-500'>
                  Sept 2019 – July 2020
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:ml-auto lg:w-1/2 lg:pl-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:-translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>Independent Contractor</h4>
                <p className='text-sm'>
                  Construction <b>Wordpress</b> Site
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Wordpress implementation</li>
                  <li>Created Theme from the scratch</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:-translate-x-full lg:flex-col lg:py-0 lg:pl-0 lg:pr-6 lg:text-right'>
                <p className='text-sm font-medium text-gray-500'>
                  June 2018 – Sept 2019
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:mr-auto lg:w-1/2 lg:pr-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:left-auto lg:right-0 lg:translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>RushMedia</h4>
                <p className='text-sm'>
                  My main focus was to build <b>Search Functionality</b> for
                  business listing
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Front-end theme development</li>
                  <li>Back-end code implementation with Laravel</li>
                  <li>Database implementation using Mysql</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:translate-x-full lg:flex-col lg:py-0 lg:pl-6 lg:pr-0'>
                <p className='text-sm font-medium text-gray-500'>
                  April 2017 – June 2018
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:ml-auto lg:w-1/2 lg:pl-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:-translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>Virtual-Wonders</h4>
                <p className='text-sm'>
                  Mainly on <b>Wordpress</b>
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Wordpress Theme and Plugin implementation</li>
                  <li>Back-end code implementation with Yii framework</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:-translate-x-full lg:flex-col lg:py-0 lg:pl-0 lg:pr-6 lg:text-right'>
                <p className='text-sm font-medium text-gray-500'>
                  Nov 2016 – March 2017
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className='relative lg:mr-auto lg:w-1/2 lg:pr-6'>
              <div className='absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:left-auto lg:right-0 lg:translate-x-6'>
                <div className='size-3 rounded-full bg-primary-500 ring ring-primary-100 ring-opacity-100 ring-offset-2 dark:bg-primary-300 dark:ring-primary-900 dark:ring-offset-gray-900' />
              </div>
              <div className='rounded-xl bg-gray-100 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700'>
                <h4 className='mb-2 font-semibold'>PENNNSAR</h4>
                <p className='text-sm'>
                  Created theme and plugins for various clients
                </p>
                <ul className='text-sm leading-relaxed list-disc ml-6 mt-4'>
                  <li>Wordpress Theme and Plugin development</li>
                </ul>
              </div>
              <div className='px-4 py-2 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mt-4 lg:flex lg:w-80 lg:translate-x-full lg:flex-col lg:py-0 lg:pl-6 lg:pr-0'>
                <p className='text-sm font-medium text-gray-500'>
                  March 2015 – Oct 2016
                </p>
              </div>
            </li>
            {/* END Event */}
          </ul>
          {/* END Timeline */}
        </div>
        {/* END Timeline: Centered with Extra Info */}
      </div>
      <div
        id='contact-me'
        className='bg-white pt-4 px-8 space-x-4 space-y-4 pb-6'
      >
        <h2 className='text-2xl font-bold my-6'>Contact</h2>
        <ContactForm />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
