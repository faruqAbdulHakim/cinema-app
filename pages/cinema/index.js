import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

export default function Cinema() {
  return (
    <>
      <Head>
        <title>CINEMA | Stream TV and Movies Live and Online</title>
      </Head>
      <Header />
      <Nav />
    </>
  );
}

export async function getServerSideProps(context) {
  const navigate = context.query.navigate || 'trending';
  console.log(navigate);
  return {
    props: {
      res: '',
    },
  };
}
