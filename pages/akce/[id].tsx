import { EventDetail } from '@components/EventDetail';
import { Layout } from '@components/Layout';
import { Loading } from '@components/Loading';
import { client } from 'lib/apollo-server';
import { EventDocument } from 'lib/graphql/event.graphql';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type AkceProps = {
	id?: number;
};

const Akce: React.FC<AkceProps> = ({ id }) => {
	if (id) return (
		<Layout>
			<EventDetail id={id} />
		</Layout>
	);

	return (
		<Layout>
			<h1>Chyba</h1>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const id = parseInt(query.id as string);
	if (!id) return {
		props: {
			id: null,
		}
	}
	await client.query({
		query: EventDocument,
		variables: {
			id: `${id}`,
		},
	})
	return {
		props: {
			initialApolloState: client.cache.extract(),
			id,
		},
	}
}

export default Akce;
