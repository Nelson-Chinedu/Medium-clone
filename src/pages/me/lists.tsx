import { FunctionComponent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { CloseOutlined } from '@ant-design/icons';

import { Tab, TabPane, Button } from 'src/components';

import withDashboardLayout from 'src/HOC/withDashboardLayout';
import withAuth from 'src/HOC/withAuth';

const Lists: FunctionComponent<{}> = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(1);

  const handleChange = (key: SetStateAction<number>) => {
    setIsActive(Number(key));
    if (Number(key) === 1) {
      router.push('/me/lists', undefined, { shallow: true });
    }
    if (Number(key) === 2) {
      router.push('/me/list/highlights', undefined, { shallow: true });
    }
    if (Number(key) === 3) {
      router.push('/me/list/recent', undefined, { shallow: true });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-extrabold my-6">Your lists</h2>
        </div>
        {isActive === 1 && (
          <div>
            <Button
              type="default"
              size="large"
              className="border-none bg-green-700 rounded-full px-4 text-white font-light"
            >
              New List
            </Button>
          </div>
        )}
      </div>
      <Tab defaultActiveKey="1" onChange={handleChange}>
        <TabPane tab="Saved" key="1">
          <div className="flex justify-between items-start bg-green-600 p-8 mt-6 rounded">
            <div className="w-2/4">
              <p className="text-2xl text-white font-bold">
                Create a list to easily organize and share stories
              </p>
              <Button
                type="default"
                size="large"
                className="rounded-full bg-black text-white border-none mt-4 text-sm"
              >
                Start a list
              </Button>
            </div>
            <div>
              <CloseOutlined className="text-white cursor-pointer" />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Highlights" key="2">
          <p>Loading...</p>
        </TabPane>
        <TabPane tab="Recently viewed" key="3">
          <p>Loading...</p>
        </TabPane>
      </Tab>
    </>
  );
};

export default withAuth(withDashboardLayout(Lists));
