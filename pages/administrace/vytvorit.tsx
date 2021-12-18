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
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
