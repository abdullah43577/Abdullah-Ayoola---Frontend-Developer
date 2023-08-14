import Navbar from './Navbar';
import Hero from './Hero';

export default function Header() {
  return (
    <>
      <header className="h-screen w-full relative">
        <Navbar />
        <Hero />
      </header>
    </>
  );
}
