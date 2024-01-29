'use client';
import FormPost from '@/app/components/FormPost';
import { FormInputPost } from '@/app/components/types';
import { SubmitHandler } from 'react-hook-form';

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Todo</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
};

export default EditPostPage;
