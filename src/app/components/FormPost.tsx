'use client';

import { FormInputPost } from './types';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
}

const FormPost: FC<FormPostProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      className="flex flex-col items-center justify-center gap-6 mt-10"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        {...register('title', { required: true })}
        placeholder="Title"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered textarea-sm w-full max-w-lg"
        placeholder=" What's in Your Mind?"
        {...register('content', { required: true })}
      ></textarea>
      <select
        {...register('tag', { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={''}
      >
        <option disabled value="">
          Select Tags
        </option>

        <option className="font-bold">Javascript</option>
        <option className="font-bold">PHP</option>
        <option className="font-bold">Python</option>
        <option className="font-bold">React</option>
        <option className="font-bold">NextJS</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        Create
      </button>
    </form>
  );
};

export default FormPost;
