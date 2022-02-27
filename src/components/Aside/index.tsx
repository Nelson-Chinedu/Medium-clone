import React, { FunctionComponent } from 'react';
import Button from 'src/components/Button';

const Aside: FunctionComponent<{}> = () => {
  return (
    <div className="c-aside border-l border-gray-300 h-screen pt-10 px-8">
      <Button
        type="default"
        shape="round"
        size="large"
        className="c-btn-upgrade"
      >
        Upgrade
      </Button>
    </div>
  );
};

export default Aside;
