import React, { FunctionComponent } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { Button, Avatar, TabPane, Tab } from 'src/components';

import Articles from 'src/pages/App/Landing/Articles';

import withDashboardLayout from 'src/HOC/withDashboardLayout';
import withAuth from 'src/HOC/withAuth';

const SRC_URL = [
  'https://randomuser.me/api/portraits/men/77.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/women/27.jpg',
];

const Index: FunctionComponent<{}> = () => {
  return (
    <div className="c-container">
      <div className="flex items-center">
        <Button
          shape="circle"
          size="middle"
          icon={<PlusOutlined />}
          className=""
          type="default"
        />
        <p className="ml-3 text-base">Keep up with the latest in any topic</p>
      </div>
      <div className="c-following">
        {SRC_URL.map((url: string) => (
          <Avatar
            key={url}
            alt="profile picture of following"
            shape="circle"
            size={50}
            src={url}
          />
        ))}
      </div>
      <div>
        <Tab defaultActiveKey="2">
          <TabPane tab="Following" key="1">
            <div className="w-2/4 mx-auto mt-14 text-center">
              <p className="mb-4">
                Stories from the writers you follow will appear here
              </p>
              <Button
                type="default"
                shape="round"
                className="c-btn-browse text-white"
                size="large"
              >
                Browse recommended stories
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Recommended" key="2">
            <Articles />
          </TabPane>
        </Tab>
      </div>
    </div>
  );
};

export default withAuth(withDashboardLayout(Index));
