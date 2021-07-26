import Button from './Button';
import Logo from './Logo';
import { useRouter } from 'next/router';

export default function Header({ home }) {
  const router = useRouter();
  return (
    <header
      className={`relative z-50 p-4 md:px-10 bg-gradient-to-b from-black/60 flex items-center ${
        home ? 'justify-end' : 'justify-between'
      }`}
    >
      {!home && <Logo />}
      {home ? (
        <Button text="English" variant="no-fill" />
      ) : (
        <Button
          text="Home"
          variant="no-fill"
          onClick={() => {
            router.replace('/cinema');
          }}
        />
      )}
    </header>
  );
}
