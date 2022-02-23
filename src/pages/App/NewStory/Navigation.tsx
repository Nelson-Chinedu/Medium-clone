import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { Avatar } from 'antd';
import { BellOutlined, EllipsisOutlined } from '@ant-design/icons';

import Button from 'src/components/Button';

const Navigation: FunctionComponent<{}> = () => {
  return (
    <div className="c-new-story-navigation flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/image/logo.svg" width={50} height={50} />
        <p>Draft in Nelson Chinedu</p>
      </div>
      <div className="flex items-center">
        <Button
          type="default"
          shape="round"
          className="c-btn-publish text-white px-3 "
        >
          Publish
        </Button>
        <Button
          type="link"
          shape="round"
          className="text-gray-500"
          // handleClick={_handleNotifactionClick}
        >
          <EllipsisOutlined style={{ fontSize: '20px' }} />
        </Button>
        <Button
          type="link"
          shape="round"
          className="text-gray-500"
          // handleClick={_handleNotifactionClick}
        >
          <BellOutlined style={{ fontSize: '20px' }} />
        </Button>
        <Button
          type="link"
          className="outline-none border-none"
          // handleClick={_handleMenuClick}
        >
          <Avatar
            src={<img src="/image/avatar-1.jpg" />}
            // size={35}
            className="cursor-pointer"
          />
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
