import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-full flex">
        <Map />
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Home;
