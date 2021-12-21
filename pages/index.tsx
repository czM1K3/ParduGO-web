import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { GetServerSideProps, NextPage } from 'next';
import { Map } from '@components/Map';
import {
	GetAllEventsDocument,
	useGetAllEventsQuery,
} from '../lib/graphql/index.graphql';
import { Loading } from '@components/Loading';
import Head from 'next/head';
import { client } from '../lib/apollo-server';

const Home: NextPage = () => {
	const { data, error, loading } = useGetAllEventsQuery();
	return (
		<>
			<Head>
				<title>ParduGO - žívá mapa pardubic</title>
			</Head>
			<Layout>
				{loading && <Loading />}
				{error && <p>Error: {error.message}</p>}
				{data && (
					<div className="w-full h-full flex" id="cont">
						<Map data={data} />
						<Sidebar data={data} />
					</div>
				)}
			</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	await client.query({
		query: GetAllEventsDocument,
	});

	return {
		props: {
			initialApolloState: client.cache.extract(),
		},
	};
};

export default Home;
