import { FunctionComponent } from 'react';

import { Tab, TabPane, Avatar } from 'src/components';

import withDashboardLayout from 'src/HOC/withDashboardLayout';

import NOTIFICATIONS from 'src/constant/notifications.json';
import RESPONSES from 'src/constant/responses.json';

type Props = {
  name: string;
  imageUrl: string;
  reason: string;
  day: string;
};

const Notification: FunctionComponent<{}> = () => {
  return (
    <>
      <h2 className="text-4xl font-extrabold my-6">Notifications</h2>
      <Tab defaultActiveKey="1">
        <TabPane tab="All" key="1">
          {NOTIFICATIONS.map((notification: Props, index: number) => (
            <div className="flex mt-8 ml-5" key={index}>
              <div>
                <Avatar
                  key={notification.imageUrl}
                  alt="profile picture"
                  shape="circle"
                  size={40}
                  src={notification.imageUrl}
                />
              </div>
              <div className="pl-4">
                <p>
                  {notification.name}{' '}
                  <span className="text-sm text-gray-500">
                    {notification.reason}
                  </span>
                </p>
                <p className="text-gray-500">{notification.day}</p>
              </div>
            </div>
          ))}
        </TabPane>
        <TabPane tab="Responses" key="2">
          {RESPONSES.map((response: Props, index: number) => (
            <div className="flex mt-8 ml-5" key={index}>
              <div>
                <Avatar
                  key={response.imageUrl}
                  alt="profile picture"
                  shape="circle"
                  size={40}
                  src={response.imageUrl}
                />
              </div>
              <div className="pl-4">
                <p>
                  {response.name}{' '}
                  <span className="text-sm text-gray-500">responsed to </span>{' '}
                  {response.reason}
                </p>
                <p className="text-gray-500">{response.day}</p>
              </div>
            </div>
          ))}
        </TabPane>
      </Tab>
    </>
  );
};

export default withDashboardLayout(Notification);
