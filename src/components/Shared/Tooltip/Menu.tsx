import React, { FunctionComponent, useContext } from 'react';
import { Avatar } from 'antd';

import { MenuContext } from 'src/components/Context/MenuContext';

const Menu: FunctionComponent<{}> = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div
      className={`${
        toggleMenu ? `block` : `hidden`
      } c-menutooltip w-1/5 bg-white shadow absolute right-2 top-20 z-50 h-auto rouded-sm text-gray-600`}
    >
      <div className="flex justify-start py-6 px-4 items-center ">
        <div className="pr-3">
          <Avatar
            src={<img src="/image/avatar-1.jpg" />}
            size={35}
            className="cursor-pointer"
          />
        </div>
        <div>
          <p className="text-black">Nelson Chinedu</p>
          <p>@nelson</p>
        </div>
      </div>
      <div className="">
        <div className="border-b border-t border-gray-200 px-4 py-4">
          <p className="py-2">Write a story</p>
          <p className="py-2">Stories</p>
          <p className="py-2">Stats</p>
          <p className="py-2">Design your profile</p>
          <p className="py-2">Settings</p>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <p className="py-2">Reading list</p>
          <p className="py-2">Publications</p>
          <p className="py-2">Control your recommendations</p>
          <p className="py-2">Medium Partner Program</p>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <p className="py-2">Become a member</p>
          <p className="py-2">Help</p>
          <p className="py-2">Sign out</p>
        </div>
        <div className="flex px-4 py-2 text-xs">
          <p className="pr-2">Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
