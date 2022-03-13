import React, { FunctionComponent, useState } from 'react';

import Landing from 'src/pages/Main/Landing';
import Dashboard from 'src/pages/App/Landing';
import GetStartedContextProvider from 'src/context/GetStarted-ctx';

const Index: FunctionComponent<{}> = () => {
  const [loggedIn] = useState<boolean>(false);
  if (loggedIn) {
    return <Dashboard />;
  }
  return (
    <GetStartedContextProvider>
      <Landing />
    </GetStartedContextProvider>
  );
};

export default Index;
