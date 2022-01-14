import {FillButton} from './Button';
import Logo from './Logo';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  function goToCinema() {
    router.push('/cinema');
  }
  return (
    <>
      <main className="absolute z-0 top-0 h-screen w-screen flex flex-col justify-center items-center space-y-5 bg-main">
        <Logo />
        <h1 className="font-bold text-xl sm:text-2xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg">Find thousand of movies and TV shows now.</p>
        <FillButton text="Go to Cinema" onClick={goToCinema} />
      </main>
    </>
  );
}
