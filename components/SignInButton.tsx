import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { doSocialLogin } from '@/app/actions';
import { FcGoogle } from 'react-icons/fc';

const SignInButton = () => {
  return (
    <section>
      <h1 className='text-center py-6'>Sign In</h1>
      <form
        className='w-max mx-auto flex flex-col gap-6'
        action={doSocialLogin}
      >
        <button
          type='submit'
          name='action'
          value={'github'}
          className='flex items-center gap-3 font-semibold p-4 border rounded-full hover:bg-slate-300 transition'
        >
          <FaGithub size={26} />
          Sign In with GitHub
        </button>

        <button
          type='submit'
          name='action'
          value={'google'}
          className='flex items-center gap-3 font-semibold p-4 border rounded-full hover:bg-slate-300 transition'
        >
          <FcGoogle size={26} />
          Sign In with Google
        </button>
      </form>
    </section>
  );
};

export default SignInButton;
