import { FunctionComponent } from 'react';

import { Avatar, Button } from 'src/components';

const Follow: FunctionComponent<{}> = () => {
  return (
    <div className="mt-8">
      <h5 className="font-semibold text-base">Who to follow</h5>
      {[0, 1, 2].map((author) => (
        <div className="flex my-4" key={author}>
          <div>
            <Avatar
              alt="profile picture"
              shape="circle"
              size={50}
              src="https://randomuser.me/api/portraits/women/78.jpg"
            />
          </div>
          <div className="px-4">
            <p className="font-bold">John Doe</p>
            <p className="text-xs">
              Follow me to learn about web development + tech. More...
            </p>
          </div>
          <div>
            <Button size="middle" shape="round" type="default" className="">
              Follow
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Follow;
