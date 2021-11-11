import { Layout } from '@components/Layout';
import { Sidebar } from '@components/Sidebar';
import type { NextPage } from 'next';
import { Map } from '@components/Map';
import { Register } from '@components/Register';

const Prihlaseni: NextPage = () => {
  return (
    <Layout>
        <Register/>
    </Layout>
  );
};

export default Prihlaseni;
