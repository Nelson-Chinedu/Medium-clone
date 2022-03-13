import React, { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';

import useGetStarted from 'src/hooks/useGetStarted';

type Props = {
  children: ReactNode;
};

const Index: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useGetStarted();

  const handleCloseModal = () => {
    setState({
      ...state,
      toggleGetStarted: !state.toggleGetStarted,
      signIn: false,
      email: false,
    });
  };

  return (
    <div className="bg-white bg-opacity-90 z-50 fixed inset-0">
      <div className="c-modal w-2/4 mx-auto flex flex-col items-center bg-white shadow-lg">
        <div className="w-11/12 text-right mt-4">
          <Image
            src="/icons/multiply.png"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Index;
