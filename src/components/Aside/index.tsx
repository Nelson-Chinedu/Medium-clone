import React, { FunctionComponent } from 'react';
import { Divider } from 'antd';

import Upgrade from 'src/components/Aside/Upgrade';
import Recommended from 'src/components/Aside/Recommended';
import Follow from 'src/components/Aside/Follow';
import ReadingList from 'src/components/Aside/ReadingList';

const Aside: FunctionComponent<{}> = () => {
  return (
    <div className="">
      <div>
        <div>
          <Upgrade />
          <Divider />
          <Recommended />
          <Follow />
          <ReadingList />
        </div>
      </div>
    </div>
  );
};

export default Aside;
