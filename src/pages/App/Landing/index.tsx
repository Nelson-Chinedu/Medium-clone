import React, { FunctionComponent, useState } from "react";

// import HeroSection from "src/pages/App/Landing/HeroSection";
// import BlogPost from "src/pages/App/Landing/BlogPost";

// import TrendingPost from "src/pages/Main/TrendingPost";

// import DashboardNavigation from 'src/components/Navigation/NavigationDashboard';
// import MenuTooltip from "src/components/Tooltip/Menu";
// import Notificatiotooltip from "src/components/Tooltip/Notification";

import { MenuContext } from "src/context/MenuContext";
import withDashboardLayout from "src/HOC/withDashboardLayout";

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
      {/* <DashboardNavigation /> */}
      {/* <MenuTooltip />
      <Notificatiotooltip />
      <HeroSection />
      <TrendingPost />
      <BlogPost /> */}
    </MenuContext.Provider>
  );
};

export default withDashboardLayout(Index);
