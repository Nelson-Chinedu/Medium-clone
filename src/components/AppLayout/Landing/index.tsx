import React, { FunctionComponent } from 'react';

import HeroSection from 'src/components/AppLayout/Landing/HeroSection';
import BlogPost from 'src/components/AppLayout/Landing/BlogPost';

import TrendingPost from 'src/components/MainLayout/TrendingPost';

import DashboardNavigation from 'src/components/Shared/Navigation/NavigationDashboard';

const Index: FunctionComponent<{}> = () => {
  return (
    <div>
      <DashboardNavigation />
      <HeroSection />
      <TrendingPost />
      <BlogPost />
    </div>
  );
};

export default Index;
