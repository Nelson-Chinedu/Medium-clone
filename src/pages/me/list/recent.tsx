import { FunctionComponent, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Tab, TabPane } from 'src/components';

import withDashboardLayout from 'src/HOC/withDashboardLayout';

import RECENTLY_VIEWED from 'src/constant/mock_data.json';

const Recent: FunctionComponent<{}> = () => {
  const router = useRouter();

  const handleChange = (key: SetStateAction<number>) => {
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
      <Tab defaultActiveKey="3" onChange={handleChange}>
        <TabPane tab="Saved" key="1">
          <p>Loading...</p>
        </TabPane>
        <TabPane tab="Highlights" key="2">
          <div>
            <p>Loading...</p>
          </div>
        </TabPane>
        <TabPane tab="Recently viewed" key="3">
          {RECENTLY_VIEWED.slice(0, 5).map((article, index: number) => (
            <div key={index}>
              <div className="flex mt-8 justify-between">
                <div className="w-4/5">
                  <h1 className="font-bold text-base capitalize">
                    {article.blogTitle}
                  </h1>
                  <p>{article.intro}</p>
                  <p className="text-green-700 text-xs mt-2">
                    {article.author}
                  </p>
                </div>
                <div className="pl-4">
                  <Image src={article.imageUrl} width={80} height={80} />
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

export default withDashboardLayout(Recent);
