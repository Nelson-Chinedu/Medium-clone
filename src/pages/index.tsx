import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import useAuth from 'src/hooks/useAuth';

const Dashboard = dynamic(() => import('src/pages/App/Landing'), {
  loading: () => (
    <div className="w-2/5 h-screen mx-auto flex flex-col items-center justify-center text-center">
      <Image src="/image/logo.svg" width={50} height={50} alt="Logo" />
    </div>
  ),
});

const LandingPage = dynamic(() => import('src/pages/Main/Landing'), {
  ssr: false,
  loading: () => (
    <div className="w-2/5 h-screen mx-auto flex flex-col items-center justify-center text-center">
      <Image src="/image/logo.svg" width={50} height={50} alt="Logo" />
    </div>
  ),
});

type Props = {
  isLoggedIn: boolean;
};

const Index: FunctionComponent<{}> = () => {
  const { isLoggedIn }: Props = useAuth();

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return <LandingPage />;
};

export default Index;
