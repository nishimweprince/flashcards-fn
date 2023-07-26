'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { createFlashCard } from '@/states/features/flashCardSlice';
import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const CreateFlashcard = () => {
  const { control, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data: object) => {
    console.log(data);
    dispatch(createFlashCard(data));
  };

  const flashcardRef = {
    question: useRef<HTMLTextAreaElement>(null),
    answer: useRef<HTMLTextAreaElement>(null),
    author: useRef<HTMLInputElement>(null),
    hint: useRef<HTMLTextAreaElement>(null),
  };

  return (
    <main className="my-12 px-4 mx-auto flex flex-col gap-12 w-full">
      <h2>Create new Flashcard</h2>
      <form
        className="flex flex-col gap-8 w-full max-w-[50%] mx-auto p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="question"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextArea
                label="Question"
                placeholder="Enter your question"
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
        <Controller
          name="answer"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextArea
                label="Answer"
                placeholder="Provide an answer to this"
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
        <Controller
          name="author"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <Input
                label="Author Name"
                type="text"
                placeholder="Provide an answer to this"
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
        <Controller
          name="hint"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextArea
                label="Hint"
                placeholder="Please provide a hint to this question"
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
        <Controller
          name="submit"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return <Button submit type="submit" value="Submit" />;
          }}
        />
      </form>
    </main>
  );
};

export default CreateFlashcard;
