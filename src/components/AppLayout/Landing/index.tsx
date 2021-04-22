import React, { FunctionComponent, useState } from 'react';

import HeroSection from 'src/components/AppLayout/Landing/HeroSection';
import BlogPost from 'src/components/AppLayout/Landing/BlogPost';

import TrendingPost from 'src/components/MainLayout/TrendingPost';

import DashboardNavigation from 'src/components/Shared/Navigation/NavigationDashboard';
import Tooltip from 'src/components/Shared/Tooltip';

import { MenuContext } from 'src/components/Context/MenuContext';

const Index: FunctionComponent<{}> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const _handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <MenuContext.Provider value={{ _handleClick, toggleMenu }}>
      <DashboardNavigation />
      <Tooltip />
      <HeroSection />
      <TrendingPost />
      <BlogPost />
    </MenuContext.Provider>
  );
};

export default Index;
