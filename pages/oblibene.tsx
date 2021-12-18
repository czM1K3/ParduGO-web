import { Favorites } from '@components/Favorites';
import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useFavorite } from 'utils/favoriteContext';

const Oblibene: NextPage = () => {
	const [favorites] = useFavorite();
	return (
		<>
			<Head>
				<title>Oblíbené</title>
			</Head>
			<Layout>
				<Favorites id={favorites} />
			</Layout>
		</>
	);
};

export default Oblibene;
