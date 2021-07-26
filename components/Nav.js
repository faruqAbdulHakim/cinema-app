import navItem from '../utils/navItem';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="absolute right-0 w-10 h-full bg-gradient-to-l from-[#030013]"></div>
      <div className="px-4 pr-10 py-2 md:px-10 flex items-center whitespace-nowrap space-x-4 sm:space-x-8 overflow-x-scroll scrollbar-hide">
        {Object.entries(navItem).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.replace(`/cinema?navigate=${key}`)}
            className="hover:bg-gray-100/20 active:text-[#ff7000] cursor-pointer bg-gray-100/10 px-2 rounded-full transition-all duration-100"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
