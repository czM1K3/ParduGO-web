import { Loading } from '@components/Loading';
import { useEventQuery } from 'lib/graphql/event.graphql';
import React from 'react';
import { Container } from '@components/Container';
import EventInfo from './EventInfo';

type EventDetailProps = {
  id: number;
};

const EventDetail: React.FC<EventDetailProps> = ({ id }) => {
  const { data, error, loading } = useEventQuery({
    variables: {
      id: `${id}`,
    },
  });
  if (loading) return <Loading />;
  if (error) return <h1>Chyba</h1>;
  return (
    <Container heading={data?.getEvent?.name}>
	  <EventInfo web={data?.getEvent?.web} contact_email={data?.getEvent?.contact_email} contact_phone={data?.getEvent?.contact_phone} description={data?.getEvent?.description} price={data?.getEvent?.price} category={data?.getEvent?.category}/>
    </Container>
  );
};

export default EventDetail;
