import { FunctionComponent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';

import { Tab, TabPane } from 'src/components';

import withDashboardLayout from 'src/HOC/withDashboardLayout';

const Highlights: FunctionComponent<{}> = () => {
  const router = useRouter();
  const [_isActive, setIsActive] = useState(1);

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
      </div>
      <Tab defaultActiveKey="2" onChange={handleChange}>
        <TabPane tab="Saved" key="1">
          <p>Loading...</p>
        </TabPane>
        <TabPane tab="Highlights" key="2">
          <div>
            <p>No highlight at the moment</p>
          </div>
        </TabPane>
        <TabPane tab="Recently viewed" key="3">
          <p>Loading...</p>
        </TabPane>
      </Tab>
    </>
  );
};

export default withDashboardLayout(Highlights);
