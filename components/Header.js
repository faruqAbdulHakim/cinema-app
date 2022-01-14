import { TextButton } from './Button';
import Logo from './Logo';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <header className="relative z-50 p-4 md:px-10 bg-gradient-to-b from-black/60 flex items-center justify-between">
      <Logo />
      <div>
      <TextButton
        text="Home"
        onClick={() => {
          router.replace('/cinema');
        }}
        />
      </div>
    </header>
  );
}
