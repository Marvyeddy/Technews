/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { doLogOut } from '@/app/actions';
import Image from 'next/image';
import { FaPlusCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { status, data: session } = useSession();
  const [isPoppup, setIsPoppup] = useState(false);
  const poppupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (poppupRef.current && !poppupRef.current.contains(e.target as Node)) {
        setIsPoppup(false);
      }
    };

    document.addEventListener('click', handleBodyClick);

    if (!isPoppup) {
      document.removeEventListener('click', handleBodyClick);
    }
    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, [isPoppup]);

  return (
    <nav className='flex justify-between items-center border-b pb-4 mb-4 relative'>
      <div>
        <Link
          href={'/'}
          className='text-4xl font-bold text-dark tracking-tighter'
        >
          Tech News
        </Link>
        <p className='text-sm'>
          Exploring Tomorrow's Innovation <br /> One Byte at a Time
        </p>
      </div>

      {session?.user ? (
        <>
          {isPoppup && (
            <div
              className='absolute right-0 top-20 z-30 bg-white p-6 shadow-lg rounded-md flex flex-col gap-2 text-right min-w-[160px]'
              ref={poppupRef}
            >
              <h2 className='font-bold'>{session.user.name}</h2>
              <p>{session.user.email}</p>
              <Link
                href={'/dashboard'}
                className='hover:underline animate-pulse'
              >
                Dashboard
              </Link>
              <Link
                href={'/create-post'}
                className='hover:underline animate-pulse'
              >
                Create Post
              </Link>
              <form action={doLogOut}>
                <button className='btn w-full' type='submit'>
                  Sign Out
                </button>
              </form>
            </div>
          )}

          <div className='flex gap-6'>
            <Link
              href={'/create-post'}
              className='md:flex items-center gap-2 mr-6 hidden'
            >
              <FaPlusCircle />
              Create Post
            </Link>

            <figure
              className='relative size-9 rounded-full overflow-hidden cursor-pointer'
              onClick={() => setIsPoppup((prev) => !prev)}
            >
              <Image
                src={session?.user?.image || ''}
                alt=''
                fill
                className='object-cover'
              />
            </figure>
          </div>
        </>
      ) : (
        <Link href={'/sign-in'} className='btn'>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
