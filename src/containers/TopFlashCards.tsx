import FlashCard from '@/components/FlashCard';
import React from 'react';

const TopFlashCards = () => {
  return (
    <article className='flex flex-col flex-wrap items-start gap-12 w-full'>
      <h2>Top FlashCards for Today</h2>
      <ul className='flex flex-wrap gap-8'>
        {Array.from({ length: 10 }).map((element, index) => {
          return (
            <li className='flex' key={index}>
              <FlashCard author='Nishimwe' />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default TopFlashCards;
