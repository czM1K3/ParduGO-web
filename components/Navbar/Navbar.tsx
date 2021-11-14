import React, { Dispatch, SetStateAction, useState } from 'react';
import NavbarItem from './NavbarItem';
import NavbarSection from './NavbarSection';
import Link from 'next/link';
import Logo from "./pardugo.svg";
import Image from "next/image";

const Navbar = ({ searchTerm, setSearchTerm }: { searchTerm?: string, setSearchTerm?: Dispatch<SetStateAction<string>> }) => {

  return (
    <>
      <nav className="bg-white h-14 w-full shadow sticky top-0 z-50 flex justify-center align-center font-sans font-bold flex items-center text-center">
        <NavbarSection>
          <Link href="/" passHref>
            <Image src={Logo} width={200} height={40} alt="ParduGO Logo" className="cursor-pointer" />
          </Link>
        </NavbarSection>

        <NavbarSection>
          <input value={searchTerm} onChange={(e) => setSearchTerm ? setSearchTerm(e.target.value) : null} type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
          />
        </NavbarSection>

        <NavbarSection>
          <div className="space-x-4">
            <NavbarItem url="/" name="Mapa" />
            <NavbarItem url="/oblibene" name="Oblíbené" />
            <NavbarItem url="/o-projektu" name="O projektu" />
            <NavbarItem url="/administrace" name="Admin" />
          </div>
        </NavbarSection>
      </nav>
    </>
  );
};

export default Navbar;
