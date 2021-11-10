import React, { Children } from 'react';

const NavbarItem: React.FC = ({ children }) => {
  return (
    <div className="md:container md:mx-auto flex justify-around">
      {children}
    </div>
  );
};

export default NavbarItem;
