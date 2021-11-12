import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';
import { useGetAllEventsQuery } from '../lib/graphql/index.graphql';
import { Loading } from '@components/Loading';
import Head from 'next/head';

const Home: NextPage = () => {
  const { data, error, loading } = useGetAllEventsQuery();
  return (
    <>
      <Head>
        <title>ParduGO - žívá mapa pardubic</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="w-full h-full flex">
            <Map data={data} />
            <Sidebar data={data} />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
