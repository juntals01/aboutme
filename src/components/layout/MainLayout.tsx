'use client';
import React, { Suspense, useEffect, useState } from 'react';

import LoadingSkeleton from '../ui/LoadingSkeleton';
import Transition from '../ui/Transition';
import ColorChanger from '../blocks/ColorChanger';
import ProfileImage from '../blocks/ProfileImage';
import Navigation from '../blocks/Navigation';
import Footer from '../blocks/Footer';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAppContext } from '../utils/context';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useAppContext();
  const [isSidebardShown, setIsSidebardShown] = useState(false);
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsWindow(true);
    }
  }, []);

  // Hook
  const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{
      width: number;
      height: number;
    }>({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  };

  const size = useWindowSize();
  return (
    <>
      <div className='flex font-sans'>
        <div
          className={`${
            isSidebardShown
              ? 'translate-x-0 w-[200px] opacity-1 ease-in-out duration-300'
              : '-translate-x-full opacity-0 w-0'
          } sm:w-[200px] sm:opacity-100 sm:translate-x-0 border-r border-[#1d1e22]`}
        >
          <ProfileImage />
          <Navigation />
          <Footer />
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <div className='w-full sm:w-[calc(100%-200px)] relative overflow-hidden h-full bg-[#2c2d2f]'>
            {isWindow && size.width < 640 && (
              <div
                className={`${theme.color.bg} w-full ${
                  isSidebardShown || size.width < 640 ? 'visible' : 'hidden'
                }`}
              >
                <div className='flex justify-center items-center'>
                  <div className='flex flex-1 justify-center'>
                    <h2 className='text-lg py-2 font-bold'>
                      Norberto Q. Libago Jr
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsSidebardShown(!isSidebardShown)}
                    className='flex justify-end items-center text-lg p-2 mr-2 rounded-md border border-gray-200'
                  >
                    <GiHamburgerMenu />
                  </button>
                </div>
              </div>
            )}
            <ColorChanger />
            <Transition>{children}</Transition>
          </div>
        </Suspense>
      </div>
    </>
  );
  // }
};

export default MainLayout;
