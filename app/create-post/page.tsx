import CreatePostForm from '@/components/CreatePostForm';
import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const CreatePost = async () => {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }
  return <CreatePostForm />;
};

export default CreatePost;
