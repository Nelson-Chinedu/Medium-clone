import React, { useState } from 'react';
import Landing from 'src/components/MainLayout/Landing';
import Dashboard from 'src/components/AppLayout';
const Index = () => {
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