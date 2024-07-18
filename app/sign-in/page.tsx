import SignInButton from '@/components/SignInButton';
import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SignIn = async () => {
  const session = await auth();

  if (session) redirect('/dashboard');
  return <SignInButton />;
};

export default SignIn;
