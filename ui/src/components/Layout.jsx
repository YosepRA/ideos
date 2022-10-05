import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation.jsx';
import Footer from './Footer.jsx';

const Layout = function LayoutComponent() {
  return (
    <>
      <MainNavigation />

      <Outlet />

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
