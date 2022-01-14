import { useRouter } from 'next/router';

export default function Nav({ navItem }) {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="absolute right-0 w-10 h-full bg-gradient-to-l from-[#030013]"></div>
      <div className="px-4 pr-10 py-2 md:px-10 flex items-center whitespace-nowrap space-x-4 sm:space-x-8 overflow-x-scroll">
        {navItem.map(({id, name}) => (
          <button
            key={id}
            onClick={() => router.replace(`/cinema?genre=${name}`)}
            className="px-6 bg-slate-900 shadow-md shadow-slate-900 rounded-full text-white text-sm py-3 cursor-pointer font-semibold hover:scale-105 hover:bg-slate-700 active:scale-100 transition-all ease-in-out"
          >
            {name}
          </button>
        ))}
      </div>
    </nav>
  );
}
