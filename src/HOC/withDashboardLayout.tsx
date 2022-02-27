import React from 'react';
import Aside from 'src/components/Aside';
import Sidenav from 'src/components/Navigation/Sidenav';

const withDashboardLayout =
  (Component: any) =>
  ({ ...props }) => {
    return (
      <div className="flex justify-between">
        <nav className="c-sidenav">
          <Sidenav />
        </nav>
        <main className="c-main py-8 px-32">
          <Component {...props} />
        </main>
        <aside className="c-aside border-l border-gray-300 pt-10 px-8">
          <Aside />
        </aside>
      </div>
    );
  };

export default withDashboardLayout;
