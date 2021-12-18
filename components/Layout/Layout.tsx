import React from 'react';
import { Navbar } from '@components/Navbar';
import { Sidebar } from '@components/Sidebar';
import { Map } from '@components/Map';

const Layout: React.FC<{}> = ({ children }) => {
	return (
		<div className="flex w-full h-full flex-col bg-background-default">
			<div>
				<Navbar />
			</div>
			{children}
		</div>
	);
};

export default Layout;
