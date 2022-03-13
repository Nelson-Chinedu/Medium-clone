import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Avatar } from 'antd';
import useMenu from 'src/hooks/useMenu';

const Menu: FunctionComponent<{}> = () => {
  const [state] = useMenu();

  return (
    <div
      className={` 
      c-menutooltip
      ${state.toggleMenu ? 'block' : 'hidden'} 
      border 
      w-1/5 
      bg-white 
      shadow  
       fixed
       bottom-24
       left-2
      z-50 
      rounded 
      text-gray-600
      `}
    >
      <div className="">
        <div className="border-b border-t border-gray-200 px-4 py-4 ">
          <Link href="/new-story">
            <a className="py-3 cursor-pointer">Medium Partner program</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Gift a membership</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Become a member</a>
          </Link>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <Link href="/">
            <a className="py-3 block">Sign out</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Refine recommendations</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Manage publications</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Stats</a>
          </Link>
          <Link href="/">
            <a className="py-3 block">Settings</a>
          </Link>
        </div>
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
      </div>
    </div>
  );
};

export default Menu;
