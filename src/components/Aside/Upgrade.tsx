import { FunctionComponent } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { Button, Input } from 'src/components';

const Upgrade: FunctionComponent<{}> = () => {
  return (
    <>
      <Button
        type="default"
        shape="round"
        size="large"
        className="c-btn-upgrade w-full"
      >
        Upgrade
      </Button>
      <Input
        type="text"
        className="w-full border px-8 py-3 my-4 rounded-3xl"
        placeholder="Search"
      />
      <div className="flex items-center justify-center m-auto w-2/4 my-4 ">
        <svg viewBox="0 0 1043.63 592.71" className="w-9">
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
            </g>
          </g>
        </svg>
        <PlusOutlined style={{ fontWeight: 100, padding: '0px 5px' }} />
        <svg width="29" height="29">
          <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path>
        </svg>
      </div>
      <p className="text-center text-base px-4">
        Discover Medium writers you already follow on Twitter.
      </p>
      <div className="text-center my-2">
        <Button size="large" shape="round" className="my-4" type="default">
          Connect to Twitter
        </Button>
        <p>Maybe Later</p>
      </div>
    </>
  );
};

export default Upgrade;
