import React from 'react';
import { Navbar } from '@components/Navbar';
import { Sidebar } from '@components/Sidebar';
import { Map } from '@components/Map';

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full flex">
        <Map />
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
