import React, { Dispatch, SetStateAction } from 'react';
import { Navbar } from '@components/Navbar';

const Layout = ({ children, searchTerm, setSearchTerm }: { children?: React.ReactNode, searchTerm?: string, setSearchTerm?: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="flex w-full h-full flex-col bg-background-default">
      <div>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
