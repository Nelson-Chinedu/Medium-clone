import React from 'react';

import NavigationDesktop from 'src/components/Shared/Navigation/NavigationLg';
import Button from 'src/components/Shared/Button';

const Herosection = () => {
  return (
    <div className="c-herosection">
      <NavigationDesktop />
      <div className="c-herosection-container border-b border-black">
        <div className="c-herosection-wrapper mx-auto py-10">
          <div className="w-2/4">
            <h1 className="c-herosection-header font-serif">
              Where good ideas find you
            </h1>
            <div className="mt-10">
              <p className="text-lg font-normal">
                Read and share new perspectives on just about any topic.
                Everyone's welcome.
                <span className="underline">Learn more.</span>
              </p>
              <Button
                type="default"
                className="px-4 my-6 border border-black bg-transparent"
                size="large"
                shape="round"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
