import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa';
import DeleteButton from './DeleteButton';

interface PostProps {
  id: string;
  author: string;
  content: string;
  category?: string;
  link?: string[];
  title: string;
  thumbnail?: string;
  date: string;
  authorEmail?: string;
}

const Posts = ({
  id,
  author,
  content,
  category,
  link,
  title,
  thumbnail,
  date,
  authorEmail,
}: PostProps) => {
  const isEditable = true;

  return (
    <section className='mt-4 border-b border-b-300 py-8'>
      <h2 className='mb-4'>
        Posted by:<strong>{author}</strong> on {date}
      </h2>
      <figure className='relative w-full h-[250px] rounded-md overflow-hidden'>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt=''
            fill
            className='object-cover object-center'
          />
        ) : (
          <Image
            src={'/download.png'}
            alt=''
            fill
            className='object-cover object-center'
          />
        )}
      </figure>

      {category && (
        <Link
          href={`/category/${category}`}
          className='bg-slate-800 w-fit text-white px-4 py-0.5 text-sm font-bold mt-4 rounded-md block'
        >
          {category}
        </Link>
      )}

      <h2 className='font-bold text-2xl my-2'>{title}</h2>
      <p className='content'>{content}</p>

      {link && (
        <div className='flex flex-col py-4 gap-3 '>
          {link.map((link, i) => (
            <div key={i} className='flex items-center gap-2'>
              <FaLink />
              <Link href={'/link'} className='link'>
                {link}
              </Link>
            </div>
          ))}
        </div>
      )}

      {isEditable && (
        <div className='btn w-max flex gap-2 font-bold'>
          <Link href={`/edit-post/${id}`}>Edit</Link>
          <DeleteButton />
        </div>
      )}
    </section>
  );
};

export default Posts;
