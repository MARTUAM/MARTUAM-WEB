import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = ({ theme, toggleTheme }: { theme: "dark" | "light", toggleTheme: () => void }) => {
  return (
    <div className="relative min-h-screen selection:bg-martuam-gold selection:text-martuam-navy">
      <div className="grain-texture" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
