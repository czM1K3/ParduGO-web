import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Register } from '@components/Register';

const Prihlaseni: NextPage = () => {
	return (
		<>
			<Head>
				<title>Registrace</title>
			</Head>
			<Layout>
				<Register />
			</Layout>
		</>
	);
};

export default Prihlaseni;
