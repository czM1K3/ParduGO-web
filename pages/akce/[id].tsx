import { EventDetail } from '@components/EventDetail';
import { Layout } from '@components/Layout';
import { Loading } from '@components/Loading';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Akce: React.FC = () => {
	const router = useRouter();
	const [id, setId] = useState(-1);

	useEffect(() => setId(parseInt(router.query.id as string)), [router]);

	if (id === -1) return (
		<Layout>
			<Loading />
		</Layout>
	)

	if (id) return (
		<Layout>
			<h1>Akce</h1>
			<EventDetail id={id} />
		</Layout>
	);

	return (
		<Layout>
			<h1>Chyba</h1>
		</Layout>
	);
}

export default Akce;
