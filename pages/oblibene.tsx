import { Container } from '@components/Container';
import { EventCard } from '@components/EventCard';
import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Oblibene: NextPage = () => {
  return (
    <>
    <Head>
        <title>Oblíbené</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Container heading="Oblíbené">
          <EventCard url='/akce/5' name="Karel" start="1" end="1"/>
        </Container>
      </Layout>
    </>
  );
};

export default Oblibene;
