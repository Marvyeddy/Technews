import Posts from '@/components/Posts';
import { postData } from '@/data';
import Link from 'next/link';
import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await auth();

  if (!session) redirect('/sign-in');
  return (
    <section>
      <h1>My Posts</h1>
      {postData && postData.length > 0 ? (
        postData.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            content={post.content}
            author={post.author}
            category={post.category}
            date={post.date}
            link={post.links || []}
            authorEmail={'test@email.com'}
            title={post.title}
            thumbnail={post.thumbnail}
          />
        ))
      ) : (
        <div className='py-6'>
          <h2>No post created yet</h2>
          {''}
          <Link href={`/create-post`} className='underline'>
            Create New
          </Link>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
