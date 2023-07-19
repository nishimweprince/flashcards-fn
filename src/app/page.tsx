import TopFlashCards from '@/containers/TopFlashCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nishimwe Flashcards - Home',
  description: 'Landing Page for Nishimwe Flashcards',
};

const Home = () => {
  return (
    <main className="min-h-[80vh] px-4 py-8 my-8 flex flex-col flex-wrap gap-8 w-full">
      <TopFlashCards />
    </main>
  );
};

export default Home;
