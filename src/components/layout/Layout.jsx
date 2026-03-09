import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from '../common/FloatingCTA';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111] text-black dark:text-white flex flex-col font-sans transition-colors duration-300 relative">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
