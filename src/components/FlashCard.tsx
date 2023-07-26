'use client';

import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestion,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useDispatch } from 'react-redux';

interface FlashCardProps {
  author?: string;
  question?: string;
  answer?: string;
  showFront?: boolean;
  className?: string;
  showBack?: boolean;
}

const FlashCard: FC<FlashCardProps> = ({
  author = 'Unkown',
  question = 'This is a card test',
  answer = 'This is the card answer',
  showFront = true,
  className,
  showBack = false,
}) => {

  const [front, setFront] = useState(showFront);
  const [back, setBack] = useState(showBack);

  return (
    <>
      <article
        className={
          className ||
          `${
            front ? 'flex' : 'hidden'
          } flex flex-col items-center justify-evenly gap-8 w-full h-[35rem] min-w-[40rem] max-w-fit min-h-[fit] px-8 py-12 max-h-fit shadow-lg ease-in-out duration-300 rounded-md hover:shadow-lg`
        }
      >
        <h3 className="text-primary font-medium text-[2.2rem]">Question</h3>
        <section className="flex items-center w-full justify-evenly h-full min-h-[70%] relative">
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-primary self-start absolute top-8 h-[3rem] left-8 z-[999] bg-white"
          />
          <span className='flex flex-col items-center gap-6 h-full justify-between'>
          <p>{question || 'This is a card test'}</p>
          <Button
          onClick={(e) => {
            e.preventDefault();
            setFront(!front);
            setBack(!back);
          }}
          value={front ? 'Show Answer' : 'Show Question'}
          className='bg-primary text-[1.5rem] text-white font-medium p-2 px-4 rounded-md ease-in-out duration hover:scale-[.98]'
          />
          </span>
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-primary self-start absolute bottom-8 h-[3rem] z-[999] bg-white right-8"
          />
        </section>
        <p>
          Asked by:{' '}
          <Button
            value={author || 'Unknown'}
            className="bg-transparent text-[1.5rem] text-primary font-medium"
          />
        </p>
      </article>
      <article
        className={
          className ||
          `${
            back ? 'flex' : 'hidden'
          } flex flex-col items-center justify-evenly gap-8 w-full h-[35rem] min-w-[40rem] max-w-fit min-h-[fit] px-8 py-12 max-h-fit shadow-lg ease-in-out duration-300 rounded-md hover:shadow-lg`
        }
      >
        <h3 className="text-primary font-medium text-[2.2rem]">Answer</h3>
        <section className="flex items-center w-full justify-evenly h-full min-h-[70%] relative">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-primary self-start absolute top-8 left-8"
          />
          <span className='flex flex-col items-center gap-6 h-full justify-between'>
          <p>{answer || 'This is the answer to it'}</p>
          <Button
          onClick={(e) => {
            e.preventDefault();
            setFront(!front);
            setBack(!back);
          }}
          value={front ? 'Show Answer' : 'Show Question'}
          className='bg-primary text-[1.5rem] text-white font-medium p-2 px-4 rounded-md ease-in-out duration hover:scale-[.98]'
          />
          </span>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-primary self-end absolute bottom-8 right-8"
          />
        </section>
        <p>
          Answered by:{' '}
          <Button
            value={author || 'Unknown'}
            className="bg-transparent text-[1.5rem] text-primary font-medium"
          />
        </p>
      </article>
    </>
  );
};

FlashCard.propTypes = {
  author: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  showFront: PropTypes.bool,
  className: PropTypes.string,
  showBack: PropTypes.bool,
};

export default FlashCard;
