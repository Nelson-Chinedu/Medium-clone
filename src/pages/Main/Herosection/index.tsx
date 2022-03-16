import React, { FunctionComponent, useCallback } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import NavigationDesktop from 'src/components/Navigation/TopNav';

import Button from 'src/components/Button';

import useGetStarted from 'src/hooks/useGetStarted';

const Herosection: FunctionComponent<{}> = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    initialInView: true,
  });
  const [state, setState] = useGetStarted();

  const handleGetStarted = useCallback(() => {
    setState({ ...state, toggleGetStarted: !state.toggleGetStarted });
  }, []);

  return (
    <div className="c-herosection">
      <NavigationDesktop intersecting={inView} />
      <div className="c-herosection-container pt-28 border-b border-black">
        <div className="c-herosection-wrapper flex items-start justify-between mx-auto pt-8">
          <div className="c-herosection-content-left">
            <h1 className="c-herosection-header font-serif">
              Medium is a place to write, read, and connect
            </h1>
            <div className="mt-1 w-9/12">
              <p className="text-lg font-normal" ref={ref}>
                It's easy and free to post your thinking on any topic and
                connect with millions of readers.
              </p>
              <Button
                type="default"
                className="px-4 my-6 pb-12 border border-black bg-black text-white hover:bg-black hover:outline-none"
                size="large"
                shape="round"
                handleClick={handleGetStarted}
              >
                Start writing
              </Button>
            </div>
          </div>
          <div className="mt-5 mr-16">
            <Image src="/image/med_img.png" width={400} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
