import React, { FunctionComponent, useState } from 'react';

import { MenuContext } from 'src/context/MenuContext';
import withDashboardLayout from 'src/HOC/withDashboardLayout';

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
    ></MenuContext.Provider>
  );
};

export default withDashboardLayout(Index);
