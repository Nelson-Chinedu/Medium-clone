import React from 'react';

import Herosection from 'src/pages/Main/Herosection';
import TrendingPost from 'src/pages/Main/TrendingPost';
import FeaturedPost from 'src/pages/Main/FeaturedPost';
import GetStarted from 'src/pages/Main/Landing/Modal';

import useGetStarted from 'src/hooks/useGetStarted';

const Landing = () => {
  const [state] = useGetStarted();
  return (
    <div
      className={`${
        state.toggleGetStarted
          ? `h-screen overflow-y-hidden`
          : `overflow-y-visible`
      }`}
    >
      <Herosection />
      <TrendingPost />
      <FeaturedPost />
      {state.toggleGetStarted && <GetStarted />}
    </div>
  );
};

export default Landing;
