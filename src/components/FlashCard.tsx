"use client"

import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { setBackCard, setFrontCard } from '@/states/features/flashCardSlice';

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

  const { showFront: front, showBack: back } = useSelector((state: RootState) => {
    return state.flashCard
  })

  const dispatch = useDispatch();

  return (
    <>
      <article
      onClick={() => {
        dispatch(setBackCard(!back))
        dispatch(setFrontCard(!front))
        console.log(front)
      }}
        className={
          className ||
          `${
            front ? 'flex' : 'hidden'
          } flex flex-col items-center justify-evenly gap-8 w-full h-[30rem] min-w-[30rem] max-w-fit min-h-[25rem] px-8 py-12 max-h-fit shadow-lg ease-in-out duration-300 rounded-md cursor-pointer hover:shadow-lg hover:scale-95`
        }
      >
        <h3 className="text-primary font-medium text-[2.2rem]">Question</h3>
        <section className="flex items-center w-full justify-evenly h-full min-h-[70%] relative">
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-primary self-start absolute top-8 left-8"
          />
          <p>{question || 'This is a card test'}</p>
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-primary self-end absolute bottom-8 right-8"
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
      onClick={() => {
        dispatch(setFrontCard(!front))
        dispatch(setBackCard(!back))
      }}
        className={
          className ||
          `${
            back ? 'flex' : 'hidden'
          } flex flex-col items-center justify-evenly gap-8 w-full h-[30rem] min-w-[30rem] max-w-fit min-h-[25rem] px-8 py-12 max-h-fit shadow-lg ease-in-out duration-300 rounded-md cursor-pointer hover:shadow-lg hover:scale-95`
        }
      >
        <h3 className="text-primary font-medium text-[2.2rem]">Answer</h3>
        <section className="flex items-center w-full justify-evenly h-full min-h-[70%] relative">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-primary self-start absolute top-8 left-8"
          />
          <p>{answer || 'This is a card test'}</p>
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
  showBack: PropTypes.bool
};

export default FlashCard;
