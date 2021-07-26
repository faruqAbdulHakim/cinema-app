import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import navItem from '../../utils/navItem';
import MovieItem from '../../components/MovieItem';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Cinema({ data }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>CINEMA | Find TV Shows and Movies Live and Online</title>
      </Head>
      <Header />
      <Nav />
      <motion.div
        key={router.query.navigate}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:flex flex-wrap justify-center"
      >
        {data.map((el) => (
          <MovieItem key={el.id} movie={el} />
        ))}
      </motion.div>
    </>
  );
}

export async function getServerSideProps(context) {
  const navigate = context.query.navigate || 'trending';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const data = await fetch(BASE_URL + navItem[navigate].url)
    .then((res) => res.json())
    .then((data) => data.results);
  return {
    props: {
      data,
    },
  };
}
