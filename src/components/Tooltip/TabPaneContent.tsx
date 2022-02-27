import React, { FunctionComponent } from 'react';
import { Avatar } from 'antd';

type Props = {
  imgPath: string;
  time: string;
  content: string;
  action: string;
  user: string;
};

const TabPaneContent: FunctionComponent<Props> = ({
  imgPath,
  time,
  user,
  content,
  action,
}) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
      <div className="pr-4">
        <Avatar
          src={<img src={imgPath} />}
          size={35}
          className="cursor-pointer"
        />
      </div>
      <div className="c-notification-wrapper cursor-pointer">
        <p className="c-test-para">
          {user} <span className="c-notification-action ">{action}</span>{' '}
          {content}
        </p>
        <p className="c-notification-time ">{time}</p>
      </div>
    </div>
  );
};

export default TabPaneContent;
