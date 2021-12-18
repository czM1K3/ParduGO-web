import { Container } from '@components/Container';
import { CreateEvent } from '@components/CreateEvent';
import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Vytvorit: NextPage = () => {
	return (
		<>
			<Head>
				<title>Oblíbené</title>
			</Head>
			<Layout>
				<Container heading="Vytvořit akci">
					<CreateEvent />
				</Container>
			</Layout>
		</>
	);
};

export default Vytvorit;
