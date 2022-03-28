import React from 'react';
import NavbarItem from './NavbarItem';
import NavbarSection from './NavbarSection';
import Link from 'next/link';
import Logo from './pardugo.svg';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import { HiSearch } from 'react-icons/hi';

const Navbar: React.FC = () => {
	const [cookie] = useCookies();
	const isAuthenticated = !!cookie['authorization'];
	return (
		<>
			<nav className="bg-white h-14 w-full shadow sticky top-0 z-50 flex justify-center align-center font-sans font-bold flex items-center text-center">
				<NavbarSection>
					<Link href="/" passHref>
						<Image
							src={Logo}
							width={200}
							height={40}
							alt="ParduGO Logo"
							className="cursor-pointer"
						/>
					</Link>
				</NavbarSection>
				
				<NavbarSection>
					<div className="space-x-4">
						<NavbarItem url="/" name="Mapa" />
						<NavbarItem url="/oblibene" name="Oblíbené" />
						<NavbarItem url="/o-projektu" name="O projektu" />
						<NavbarItem
							url={isAuthenticated ? '/administrace' : '/prihlaseni'}
							name={isAuthenticated ? 'Admin' : 'Přihlášení'}
						/>
						{isAuthenticated && (
							<Link href="/administrace/odhlasit">Odhlásit se</Link>
						)}
					</div>
				</NavbarSection>
			</nav>
		</>
	);
};

export default Navbar;
