import CreateFlashcard from '@/containers/CreateFlashcard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Flashcard - Nishimwe Flashcards',
  description: 'Create Flashcard Page for Nishimwe Flashcards',
};

const CreateFlashcardPage = () => {
    return (
        <main className='w-[90%] mx-auto my-12'>
          <CreateFlashcard />
        </main>
    )
};

export default CreateFlashcardPage;