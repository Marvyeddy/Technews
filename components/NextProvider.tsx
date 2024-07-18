import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

export const NextProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
