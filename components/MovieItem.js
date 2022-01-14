import Image from 'next/image';
import { useRouter } from 'next/router';
import API_ENDPOINT from '../constants/api-endpoint';

export default function MovieItem({ movie }) {
  const router = useRouter();

  return (
    <div
      className="group p-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-slate-900"
      onClick={() => {
        router.replace(`/cinema/${movie.id}`);
      }}
    >
      <div className="relative w-full h-60">
        <Image
          src={API_ENDPOINT.getMovieImage(movie.poster_path)}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <p className="truncate max-w-md">{movie.overview}</p>
      <h2 className="font-semibold text-xl text-white">
        {movie.title || movie.original_title || movie.original_name}
      </h2>
      <div className="flex space-x-2 opacity-0 group-hover:opacity-100">
        <p>{movie.release_date || movie.first_air_date}</p>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <p>{movie.vote_count}</p>
        </div>
        <p
          className={`${
            movie.vote_average >= 8
              ? 'text-green-600'
              : movie.vote_average >= 6
              ? 'text-yellow-600'
              : 'text-red-700'
          } font-semibold`}
        >
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
