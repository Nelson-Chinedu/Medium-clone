import React from 'react';
import Image from 'next/image';

import useAuth from 'src/hooks/useAuth';

const withAuth =
  (Component: React.ComponentType<{}>) =>
  ({ ...props }) => {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading)
      return (
        <div className="w-2/5 h-screen mx-auto flex flex-col items-center justify-center text-center">
          <Image src="/image/logo.svg" width={50} height={50} alt="Logo" />
        </div>
      );

    if (!isLoggedIn) {
      window.location.href = '/';
    } else {
      return <Component {...props} />;
    }
  };

export default withAuth;
