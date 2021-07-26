import Head from 'next/head';
import Header from '../../../components/Header';
import Image from 'next/image';

export default function MovieDetailPage({ movie }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Head>
        <title>
          CINEMA | {movie.title || movie.original_title || movie.original_name}
        </title>
      </Head>
      <Header />
      <div className="p-4 mt-8 sm:flex justify-center items-start space-x-4 space-y-4 sm:space-y-0 sm:space-x-10">
        <div className="relative w-full h-96">
          <Image
            src={BASE_URL + (movie.poster_path || movie.backdrop_path)}
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white">
              {movie.title || movie.original_title || movie.original_name}
            </h1>
            {movie.tagline && (
              <p className="text-sm font-light">{movie.tagline}</p>
            )}
          </div>

          <p>{movie.overview}</p>

          <div className="divide-y py-4 divide-gray-500 max-w-sm text-sm">
            {movie.vote_average && <p>Score : {movie.vote_average}</p>}

            {movie.genres && (
              <p>Genres : {movie.genres.map((el) => el.name).join(', ')} </p>
            )}

            {movie.popularity && <p>Popularity : {movie.popularity}</p>}

            <p>Release Date : {movie.release_date || movie.first_air_date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const movieId = context.params.movieId;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      movie: data,
    },
  };
}
