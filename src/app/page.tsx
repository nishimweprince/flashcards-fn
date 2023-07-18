import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nishimwe Flashcards - Home',
  description: 'Landing Page for Nishimwe Flashcards',
};

const Home = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center gap-8">
      <h1 className="font-black text-[3rem] text-center text-black">
        {' '}
        Welcome to Nishimwe Flashcards
      </h1>
      <button className="py-4 px-8 bg-slate-600 text-white text-[1.5rem] flex items-center justify-center rounded-md ease-in-out duration-300 hover:scale-95">
        Explore
      </button>
    </main>
  );
};

export default Home;
