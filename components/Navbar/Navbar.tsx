import React from 'react';
import NavbarItem from './NavbarItem';
import NavbarSection from './NavbarSection';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-white h-14 w-full shadow sticky top-0 z-50 flex justify-center align-center font-sans font-bold flex items-center text-center">
        <NavbarSection>
          <Link href="/" passHref>
            <div className="bg-pardubice-default text-white">
              <h1>Logo</h1>
            </div>
          </Link>
        </NavbarSection>

        <NavbarSection>
          <h1>SearchBar</h1>
        </NavbarSection>

        <NavbarSection>
          <div className="space-x-4">
            <NavbarItem url="/" name="Mapa" />
            <NavbarItem url="/oblibene" name="Oblíbené" />
            <NavbarItem url="/o-projektu" name="O projektu" />
            <NavbarItem url="/prihlaseni" name="Přihlášení" />
          </div>
        </NavbarSection>
      </nav>
    </>
  );
};

export default Navbar;
