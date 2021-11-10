import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import { Map } from '@components/Map';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-screen h-screen bg-red-500">
        <Map />
      </div>
    </Layout>
  );
};

export default Home;
