import React, { FunctionComponent, useState } from 'react';

import HeroSection from 'src/components/AppLayout/Landing/HeroSection';
import BlogPost from 'src/components/AppLayout/Landing/BlogPost';

import TrendingPost from 'src/components/MainLayout/TrendingPost';

import DashboardNavigation from 'src/components/Shared/Navigation/NavigationDashboard';
import MenuTooltip from 'src/components/Shared/Tooltip/Menu';
import Notificatiotooltip from 'src/components/Shared/Tooltip/Notification';

import { MenuContext } from 'src/components/Context/MenuContext';

const Index: FunctionComponent<{}> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);

  const _handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };
  const _handleNotifactionClick = () => {
    setToggleNotification(!toggleNotification);
  };

  return (
    <MenuContext.Provider
      value={{
        _handleMenuClick,
        _handleNotifactionClick,
        toggleMenu,
        toggleNotification,
      }}
    >
      <DashboardNavigation />
      <MenuTooltip />
      <Notificatiotooltip />
      <HeroSection />
      <TrendingPost />
      <BlogPost />
    </MenuContext.Provider>
  );
};

export default Index;
