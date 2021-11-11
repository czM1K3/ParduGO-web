import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';
import { useGetAllEventsQuery } from '../lib/graphql/index.graphql';
import { Loading } from '@components/Loading';

const Home: NextPage = () => {
  const {data, error, loading} = useGetAllEventsQuery();
  return (
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
  );
};

export default Home;
