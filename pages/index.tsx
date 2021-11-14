import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';
import { useGetAllEventsQuery } from '../lib/graphql/index.graphql';
import { Loading } from '@components/Loading';
import Head from 'next/head';
import Fuse from 'fuse.js'
import { useState } from 'react';

const Home: NextPage = () => {
  const { data, error, loading } = useGetAllEventsQuery();
  const fuse = data && new Fuse(data.getAllEvents, {
    keys: ['name']
  });
  const [searchedFor, setSearchedFor] = useState("");
  const results = fuse?.search(searchedFor).map((result) => result.item);
  return (
    <>
      <Head>
        <title>ParduGO - žívá mapa pardubic</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout searchTerm={searchedFor} setSearchTerm={setSearchedFor}>
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="w-full h-full flex">
            <Map data={data} />
            <Sidebar        
              // @ts-ignore
              data={results.length ? results : data.getAllEvents} />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
