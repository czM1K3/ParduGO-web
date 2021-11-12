import { Container } from '@components/Container';
import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const O_Projektu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oblíbené</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Container heading="O projektu">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            blanditiis dolor doloribus nihil minima nostrum eaque perferendis
            veniam hic dolorum, reiciendis soluta fugit ex. Amet, laudantium
            quibusdam! Vitae, a delectus. Debitis nihil aspernatur quo unde
            nulla nobis laborum fuga sapiente amet quas, nam dicta veniam a
            provident assumenda non porro doloremque ipsa! Eos, eius minima!
            Ratione omnis iusto accusantium ipsum! Ab eius sequi totam modi
            facere? Perspiciatis porro quod sapiente nulla maiores quam incidunt
            possimus cum modi! Eaque est obcaecati enim, natus repellat cum
            placeat debitis quidem quia deleniti tenetur.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default O_Projektu;
