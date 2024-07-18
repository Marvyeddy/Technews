import React from 'react';
import { categoryData } from '@/data';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <article className='flex gap-4 text-sm flex-wrap'>
      {categoryData &&
        categoryData.map((category) => (
          <Link
            href={`/category/${category.name}`}
            key={category.id}
            className='px-4 py-1 bg-slate-800 text-white rounded-md'
          >
            {category.name}
          </Link>
        ))}
    </article>
  );
};

export default CategoryList;
