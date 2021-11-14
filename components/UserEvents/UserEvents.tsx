import { EventCard } from "@components/EventCard";
import { Loading } from "@components/Loading";
import { useAdministrationQuery } from "lib/graphql/administrace.graphql";
import React from "react";

const UserEvents: React.FC = () => {
    const { data, error, loading } = useAdministrationQuery();

	if (loading) return <Loading />
	if (error) return <div>{error.message}</div>
	return (
		<div>
			{data!.getUserEvents.map((event) => (
				<EventCard key={event.id} id={event.id} name={event.name} start={event.start} end={event.end} url={`/akce/${event.id}`}/>
			))}
		</div>
	);
}

export default UserEvents;
