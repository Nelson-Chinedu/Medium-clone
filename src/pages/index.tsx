import React, { FunctionComponent, useState } from 'react';

import Landing from 'src/pages/Main/Landing';
import Dashboard from 'src/pages/App/Landing';

const Index: FunctionComponent<{}> = () => {
  const [loggedIn] = useState<boolean>(false);
  if (loggedIn) {
    return <Dashboard />;
  }
  return <Landing />;
};

export default Index;
