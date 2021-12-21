import { EventDetail } from '@components/EventDetail';
import { Layout } from '@components/Layout';
import { Loading } from '@components/Loading';
import { client } from 'lib/apollo-server';
import { EventDocument } from 'lib/graphql/event.graphql';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type AkceProps = {
	id: number;
};

const Akce: React.FC<AkceProps> = ({ id }) => (
	<Layout>
		<EventDetail id={id} />
	</Layout>
);

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
	const id = parseInt(query.id as string);
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
