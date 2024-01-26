import FormPost from '@/components/FormPost';
import React from 'react';

const CreatePage = () => {
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Add new Todo</h1>
      <FormPost />
    </div>
  );
};

export default CreatePage;
