import React, { FunctionComponent, useContext } from 'react';
import { Tabs } from 'antd';

import { MenuContext } from 'src/context/MenuContext';
import TabPaneContent from 'src/components/Tooltip/TabPaneContent';

const { TabPane } = Tabs;

const Notification: FunctionComponent<{}> = () => {
  const { toggleNotification } = useContext(MenuContext);

  return (
    <div
      className={`${
        toggleNotification ? `block` : `hidden`
      } c-notificationtooltip  w-3/12 bg-white shadow absolute right-10 top-20 z-50 h-auto  rouded-lg text-gray-600`}
    >
      <Tabs defaultActiveKey="1" className=" ">
        <TabPane tab="All" key="1" className="w-full">
          <TabPaneContent
            user="John Doe"
            action="clapped for"
            time="about 5 hours ago"
            content="How to setup a virtual environment"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="clapped for"
            time="about 10 hours ago"
            content="How to build a full-stack app"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="clapped for"
            time="about 5 hours ago"
            content="How to docker a container"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="clapped for"
            time="about 5 hours ago"
            content="How to build a todo app"
            imgPath="/image/avatar-1.jpg"
          />
        </TabPane>
        <TabPane tab="Responses" key="2" className="w-full">
          <TabPaneContent
            user="John Doe"
            action="responded to"
            time="about 5 hours ago"
            content="How to setup a virtual environment"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="responded to"
            time="about 5 hours ago"
            content="How to setup a virtual environment"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="responded to"
            time="about 5 hours ago"
            content="How to setup a virtual environment"
            imgPath="/image/avatar-1.jpg"
          />
          <TabPaneContent
            user="John Doe"
            action="responded to"
            time="about 5 hours ago"
            content="How to setup a virtual environment"
            imgPath="/image/avatar-1.jpg"
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Notification;
