import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';
import { Login } from '@components/Login';

const Prihlaseni: NextPage = () => {
  return (
    <Layout>
        <Login/>
    </Layout>
  );
};

export default Prihlaseni;
