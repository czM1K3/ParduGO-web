import { Container } from '@components/Container';
import { EventCard } from '@components/EventCard';
import { Loading } from '@components/Loading';
import { useFavoritesQuery } from 'lib/graphql/favorites.graphql';
import React from 'react';

type FavoritesProps = {
	id: string[];
};

const Favorites: React.FC<FavoritesProps> = ({ id }) => {
	const { data, error, loading } = useFavoritesQuery({
		variables: {
			id,
		},
	});
	if (loading) return <Loading />;
	if (error) return <div>Chyba!</div>;
	return (
		<Container heading="Oblíbené">
			{data!.getFavorites.map((event) => (
				<EventCard key={event.id} {...event} url={`/akce/${event.id}`} />
			))}
			{data!.getFavorites.length === 0 && (
				<div>Nemáte vybrané žádné oblíbené akce</div>
			)}
		</Container>
	);
};

export default Favorites;
