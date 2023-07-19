import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface FlashCardProps {
  author?: string;
  front?: string;
}

const FlashCard: FC<FlashCardProps> = ({ author, front }) => {
  return (
    <article className="flex flex-col items-center justify-evenly gap-8 w-full h-[30rem] min-w-[30rem] max-w-fit min-h-[25rem] px-8 py-12 max-h-fit shadow-lg ease-in-out duration-300 rounded-md cursor-pointer hover:shadow-lg hover:scale-95">
      <section className='flex items-center w-full justify-evenly h-full min-h-[70%] relative'>
        <FontAwesomeIcon icon={faQuoteLeft} className='text-primary self-start absolute top-8 left-8' />
        <h4>{front || 'This is a card test'}</h4>
        <FontAwesomeIcon icon={faQuoteRight} className='text-primary self-end absolute bottom-8 right-8' />
      </section>
      <p>Prepared by: <Button value={author || 'Nishimwe'} className='bg-transparent text-[1.5rem] text-primary font-medium' /></p>
    </article>
  );
};

FlashCard.propTypes = {
  author: PropTypes.string,
  front: PropTypes.string,
};

export default FlashCard;
