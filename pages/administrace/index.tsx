import { Layout } from '@components/Layout';
import React from 'react';
import Link from 'next/link';
import { UserEvents } from '@components/UserEvents';
import { Container } from '@components/Container';
import { HiPlus } from 'react-icons/hi';

const Administrace: React.FC = () => {
  return (
    <Layout>
      <Container heading="Administrace">
        <Link href="/administrace/vytvorit" passHref>
          <button
            type="submit"
            className="transition duration-200 bg-pardubice-default hover:bg-pardubice-dark focus:bg-pardubice-dark focus:shadow-sm focus:ring-4 focus:ring-pardubice-dark focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2 flex justify-center items-center">
              Vytvořit akci
              <HiPlus className="float-right" />
            </span>
          </button>
        </Link>
        <UserEvents />
      </Container>
    </Layout>
  );
};

export default Administrace;
