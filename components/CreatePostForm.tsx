'use client';

import React, { useState } from 'react';
import { FaLink, FaPlus, FaTrash } from 'react-icons/fa';
import { categoryData } from '@/data';

const CreatePostForm = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState('');

  const handleAdd = (e: any) => {
    e.preventDefault();
    setLinks((prev) => [...prev, linkInput]);
    setLinkInput('');
  };

  const handleDelete = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form className='flex flex-col gap-2 mt-3'>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Content' />

        {links.map((link, i) => (
          <div key={i} className='flex items-center gap-2'>
            <FaLink />
            <h2 className='link cursor-pointer'> {link}</h2>
            <FaTrash
              onClick={() => handleDelete(i)}
              className='cursor-pointer'
            />
          </div>
        ))}

        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Paste your link here'
            className='grow'
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
          <button className='btn flex items-center gap-2' onClick={handleAdd}>
            <FaPlus />
            Add
          </button>
        </div>

        <select className='appearance-none p-3 rounded-md'>
          <option value=''>Select a Category</option>
          {categoryData &&
            categoryData.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>

        <button type='submit' className='primary-btn'>
          Create Post
        </button>

        <h2 className='text-red-400 font-bold p-2'>Error message</h2>
      </form>
    </div>
  );
};

export default CreatePostForm;
