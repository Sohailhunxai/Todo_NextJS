'use client';
import FormPost from '@/app/components/FormPost';
import { FormInputPost } from '../components/types';
import { SubmitHandler } from 'react-hook-form';

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Add new Todo</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
