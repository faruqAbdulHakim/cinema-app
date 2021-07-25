import Button from './Button';
import Logo from './Logo';

export default function Header({ home }) {
  return (
    <header
      className={`relative z-50 p-4 md:px-10 bg-gradient-to-b from-black/60 flex items-center ${
        home ? 'justify-end' : 'justify-between'
      }`}
    >
      {!home && <Logo />}
      {home && <Button text="English" variant="no-fill" />}
    </header>
  );
}
