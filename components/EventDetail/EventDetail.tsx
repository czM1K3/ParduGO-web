import { Loading } from "@components/Loading";
import { useEventQuery } from "lib/graphql/event.graphql";
import React from "react";

type EventDetailProps = {
	id: number;
}

const EventDetail: React.FC<EventDetailProps> = ({ id }) => {
	const { data, error, loading } = useEventQuery({
		variables: {
			id: `${id}`,
		},
	});
	if (loading) return (
		<Loading />
	);
	if (error) return (
		<h1>Chyba</h1>
	);
	return (
		<div>
			{JSON.stringify(data)}
		</div>
	);
}

export default EventDetail;
