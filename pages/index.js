import Head from 'next/head';
import HomePage from '../components/HomePage';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>CINEMA | Stream TV and Movies Live and Online</title>
      </Head>
      <Header home />
      <HomePage />
    </>
  );
}
