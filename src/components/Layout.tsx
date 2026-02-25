import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div className="relative min-h-screen selection:bg-martuam-gold selection:text-martuam-navy">
      <div className="grain-texture" />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
