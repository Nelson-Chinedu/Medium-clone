import React, { FunctionComponent, useState } from 'react';

import Landing from 'src/components/MainLayout/Landing';
import Dashboard from 'src/components/AppLayout/Landing';

const Index: FunctionComponent<{}> = () => {
  const [loggedIn] = useState<boolean>(false);
  if(loggedIn){
    return (
      <Dashboard />
    )
  }
  return (
    <Landing />
  )
};

export default Index;