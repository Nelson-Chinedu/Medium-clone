import { FunctionComponent, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { EllipsisOutlined } from '@ant-design/icons';

import { Tab, TabPane, Button } from 'src/components';

import withDashboardLayout from 'src/HOC/withDashboardLayout';
import withAuth from 'src/HOC/withAuth';

const RESPONSES = [
  'Hello Joe, thanks for the feedback',
  'Hi Doe, thanks and I can be reached via email',
  'Awesome',
];

const Responses: FunctionComponent<{}> = () => {
  const router = useRouter();

  const handleChange = (key: SetStateAction<number>) => {
    if (Number(key) === 1) {
      router.push('/me/stories/drafts', undefined, { shallow: true });
    }
    if (Number(key) === 2) {
      router.push('/me/stories/public', undefined, { shallow: true });
    }
    if (Number(key) === 3) {
      router.push('/me/stories/responses', undefined, { shallow: true });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-extrabold my-6">Your Stories</h2>
        </div>
        <div>
          <Button
            type="default"
            size="large"
            className="border-none bg-green-700 text-sm mr-2 rounded-full px-4 text-white font-light"
          >
            Write a story
          </Button>
          <Button
            type="default"
            size="large"
            className="border border-black text-sm rounded-full px-4 text-black font-light"
          >
            Import a story
          </Button>
        </div>
      </div>
      <Tab defaultActiveKey="3" onChange={handleChange}>
        <TabPane tab="Drafts 11" key="1">
          <p>Loading...</p>
        </TabPane>
        <TabPane tab="Published 7" key="2">
          <p>Loading...</p>
        </TabPane>
        <TabPane tab="Responses 3" key="3">
          {RESPONSES.map((response, index: number) => (
            <div key={index}>
              <div className="flex mt-8 justify-between">
                <div className="w-4/5">
                  <p className="font-bold text-base capitalize">{response}</p>
                  <p className="flex items-baseline text-gray-500 text-xs mt-2">
                    Published on Jan 14, 2022. 2 min read
                    <EllipsisOutlined className="ml-4 text-xl font-bold" />
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          ))}
        </TabPane>
      </Tab>
    </>
  );
};

export default withAuth(withDashboardLayout(Responses));
