import React, { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import { Avatar } from 'antd';

import { MenuContext } from 'src/context/MenuContext';

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
        <div className="border-b border-t border-gray-200 px-4 py-4 ">
          <Link href="/new-story">
            <a className="py-2 cursor-pointer">Write a story</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Stories</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Stats</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Design your profile</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Settings</a>
          </Link>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <Link href="/">
            <a className="py-2 block">Reading list</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Publications</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Control your recommendations</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Medium Partner Program</a>
          </Link>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <Link href="/">
            <a className="py-2 block">Become a member</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Help</a>
          </Link>
          <Link href="/">
            <a className="py-2 block">Sign out</a>
          </Link>
        </div>
        <div className="flex px-4 py-2 text-xs">
          <Link href="/">
            <a className="pr-2 block">Privacy</a>
          </Link>
          <Link href="/">
            <a>Terms</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
