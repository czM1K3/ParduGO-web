import React from 'react';
import Link from 'next/link';

type NavbarItemProps = { url: string; name: string };

const NavbarItem: React.FC<NavbarItemProps> = ({ url, name }) => {
	return (
		<Link href={url} passHref>
			<a className="px-3 py-1 rounded-md cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
				{name}
			</a>
		</Link>
	);
};

export default NavbarItem;
