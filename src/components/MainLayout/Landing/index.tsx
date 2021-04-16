import React from 'react';

import Herosection from 'src/components/MainLayout/Herosection';
import TrendingPost from 'src/components/MainLayout/TrendingPost';
import FeaturedPost from 'src/components/MainLayout/FeaturedPost';

const Landing = () => {
  return (
    <>
      <Herosection />
      <TrendingPost />
      <FeaturedPost />
    </>
  );
};

export default Landing;
