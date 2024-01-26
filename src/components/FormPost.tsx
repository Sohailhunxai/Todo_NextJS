import React from 'react';

const FormPost = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-6 mt-10">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xl"
      />
      <textarea
        className="textarea textarea-bordered textarea-sm w-full max-w-xl"
        placeholder="Bio"
      ></textarea>
      <select className="select select-bordered w-full max-w-xl">
        <option disabled selected>
          Who Wana Smoke wth me?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </form>
  );
};

export default FormPost;
