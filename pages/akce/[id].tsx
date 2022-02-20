import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react';
import { EventDetail } from '@components/EventDetail';
import { Layout } from '@components/Layout';
import { client } from 'lib/apollo-server';
import { EventDocument } from 'lib/graphql/event.graphql';
import { prisma } from 'lib/resolvers';

type AkceProps = {
	id: number;
};

const Akce: NextPage<AkceProps> = ({ id }) => (
	<Layout>
		<EventDetail id={id} />
	</Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
	const events = await prisma.event.findMany();
	return {
		fallback: "blocking",
		paths: events.map((event) => `/akce/${event.id}`),
	};
};

export const getStaticProps: GetStaticProps<AkceProps> = async ({
	params,
}) => {
	if (!params || !params.id || typeof params.id !== 'string') 
		return { notFound: true };
	const id = parseInt(params.id);
	if (!id)
		return {
			notFound: true,
		};
	await client.query({
		query: EventDocument,
		variables: {
			id: `${id}`,
		},
	});

	const extracted = client.cache.extract();
	const data = extracted.ROOT_QUERY?.[`getEvent({"id":"${id}"})`];
	if (!data)
		return {
			notFound: true,
		};
	return {
		props: {
			initialApolloState: extracted,
			id,
		},
	};
};

export default Akce;
