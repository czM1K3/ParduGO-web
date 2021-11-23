import { Loading } from '@components/Loading';
import { useEventQuery } from 'lib/graphql/event.graphql';
import React from 'react';
import { Container } from '@components/Container';
import EventInfo from './EventInfo';
import { dayToString } from 'utils/date';
import Head from 'next/head';

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
  if (!data!.getEvent) return <h1>Akce neexistuje</h1>;
  return (
    <>
      <Head>
        <title>{data!.getEvent.name}</title>
      </Head>
      <Container heading="Informace o akci:">
        <EventInfo
          web={data!.getEvent!.web}
          contact_email={data!.getEvent!.contact_email}
          contact_phone={data!.getEvent!.contact_phone}
          description={data!.getEvent!.description}
          price={data!.getEvent!.price ?? null}
          category={data!.getEvent!.category}
          name={data!.getEvent!.name}
          start={data!.getEvent!.start}
          end={data!.getEvent!.end}
        />
      </Container>
    </>
  );
};

export default EventDetail;
