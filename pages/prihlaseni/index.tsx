import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import { Login } from '@components/Login';
import Head from 'next/head';

const Prihlaseni: NextPage = () => {
	return (
		<>
			<Head>
				<title>Přihlášení</title>
			</Head>
			<Layout>
				<Login />
			</Layout>
		</>
	);
};

export default Prihlaseni;
