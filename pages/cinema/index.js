import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import PageNavigation from '../../components/PageNavigation'
import MovieItem from '../../components/MovieItem';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import API_ENDPOINT from '../../constants/api-endpoint';

export default function Cinema({ movieGenres, movies, genre }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CINEMA | Find TV Shows and Movies Live and Online</title>
      </Head>
      <Header />
      <Nav navItem={movieGenres} />
      <h2 className="text-center font-bold text-xl sm:text-2xl mt-10">
        We found {movies.total_results} {genre} Movies for you
      </h2>
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
        className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:flex flex-wrap justify-center mt-4 px-8 py-4"
      >
        {movies?.results?.map((el) => (
          <MovieItem key={el.id} movie={el} />
        ))}
      </motion.div>
      <PageNavigation page={movies.page} totalPages={movies.total_pages}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const genreNameQuery = context.query.genre || 'Action';
  const pageQuery = context.query.page || 1;

  const movieGenres = await fetch(API_ENDPOINT.getMovieGenres)
    .then((response) => response.json())
    .then((responseJSON) => responseJSON.genres);

  const genreId = movieGenres.filter(({ name }) => name === genreNameQuery)[0]
    ?.id;

  const movies = await fetch(API_ENDPOINT.getMoviesByGenre(genreId, pageQuery)).then(
    (response) => response.json()
  );

  if (movies.total_pages > 500) {
    movies.total_pages = 500;
  };

  return {
    props: {
      movieGenres,
      movies,
      genre: genreNameQuery,
    },
  };
}
