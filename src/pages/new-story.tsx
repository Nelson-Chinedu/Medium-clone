import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import { Image } from 'antd';
import { BellOutlined, EllipsisOutlined } from '@ant-design/icons';

import { Avatar, Button } from 'src/components';

let Editor: ComponentType<{}>;

if (typeof window !== 'undefined') {
  Editor = dynamic(() => import('../components/Editor'));
}

const NewStory = () => {
  return (
    <div className="w-9/12 my-4 mx-auto">
      <div className=" flex justify-between">
        <div className="flex items-center">
          <Image src="/image/logo.svg" width={40} height={30} preview={false} />
          <p className="ml-3">Draft in John Doe</p>
        </div>
        <div>
          <Button
            className="rounded-full bg-green-700 text-white text-xs mr-4"
            type="default"
            size="middle"
            // handleClick={handleSave}
          >
            Publish
          </Button>
          <EllipsisOutlined className="text-xl mr-4" />
          <BellOutlined className="text-xl mr-4" />
          <Avatar
            alt="profile picture"
            shape="circle"
            size="default"
            src="https://randomuser.me/api/portraits/women/78.jpg"
          />
        </div>
      </div>
      <div className="w-3/4 my-8 mx-auto">{Editor && <Editor />}</div>
    </div>
  );
};

export default NewStory;
